import { gql } from "@apollo/client/core";
import { FollowPoint, ScheduleAction } from "@aws-sdk/client-medialive";
import AmazonS3URI from "amazon-s3-uri";
import assert from "assert";
import R from "ramda";
import {
    CreateMediaLiveChannelDocument,
    DeleteMediaLiveChannelDocument,
    GetConferenceIdFromChannelResourceIdDocument,
    GetMediaLiveChannelByRoomDocument,
    GetRoomsWithEventsDocument,
    GetRoomsWithEventsStartingDocument,
    GetRoomsWithNoEventsDocument,
    GetTransitionsByRoomDocument,
    InputType_Enum,
    SetMediaLiveChannelForRoomDocument,
} from "../generated/graphql";
import { apolloClient } from "../graphqlClient";
import { createDistribution } from "../lib/aws/cloudFront";
import {
    ChannelState,
    createChannel as createMediaLiveChannel,
    createLoopingMP4Input,
    createMP4Input,
    createRtmpInput,
    getMediaLiveChannelState,
} from "../lib/aws/mediaLive";
import { createChannel as createMediaPackageChannel, createOriginEndpoint } from "../lib/aws/mediaPackage";
import { CloudFront, MediaLive, MediaPackage, shortId } from "./aws/awsClient";
import { getConferenceConfiguration } from "./conferenceConfiguration";

gql`
    query GetRoomsWithEventsStarting($from: timestamptz, $to: timestamptz) {
        Room(
            where: {
                events: {
                    startTime: { _gte: $from, _lte: $to }
                    intendedRoomModeName: { _in: [PRERECORDED, Q_AND_A, PRESENTATION] }
                }
            }
        ) {
            id
            conferenceId
            mediaLiveChannel {
                id
                mediaLiveChannelId
            }
        }
    }

    mutation DeleteMediaLiveChannel($id: uuid!) {
        delete_MediaLiveChannel_by_pk(id: $id) {
            id
        }
    }
`;

export async function ensureUpcomingChannelsCreated(holdOffOnCreatingChannel: {
    [roomId: string]: boolean;
}): Promise<void> {
    console.log("Ensuring channels created for rooms with upcoming events");
    const now = new Date();
    const from = now.toISOString();
    const to = new Date(now.getTime() + 120 * 60 * 1000).toISOString();

    const roomsResult = await apolloClient.query({
        query: GetRoomsWithEventsStartingDocument,
        variables: {
            from,
            to,
        },
    });

    if (roomsResult.error || roomsResult.errors) {
        console.error("Failure while retrieving rooms with upcoming events", roomsResult.error, roomsResult.errors);
    }

    if (roomsResult.data.Room.length === 0) {
        console.log("No rooms have events starting soon");
    }

    console.log(`Found ${roomsResult.data.Room.length} rooms with upcoming events`);

    for (const room of roomsResult.data.Room) {
        console.log("Syncing channel for room", room.id);

        if (holdOffOnCreatingChannel[room.id]) {
            console.warn("Channel sync has requested a hold on restarting the channel", room.id);
            continue;
        }

        let needToCreateChannel = false;
        if (room.mediaLiveChannel) {
            const channelState = await getMediaLiveChannelState(room.mediaLiveChannel.mediaLiveChannelId);
            console.log("Checked channel state", room.id, room.mediaLiveChannel.mediaLiveChannelId, channelState);
            if (
                [
                    ChannelState.CREATE_FAILED,
                    ChannelState.DELETED,
                    ChannelState.DELETING,
                    ChannelState.UPDATE_FAILED,
                    "MISSING",
                ].includes(channelState)
            ) {
                console.log("Removing old/broken channel from room", room.id, room.mediaLiveChannel.id, channelState);
                try {
                    await apolloClient.mutate({
                        mutation: DeleteMediaLiveChannelDocument,
                        variables: {
                            id: room.mediaLiveChannel.id,
                        },
                    });
                } catch (e) {
                    console.error("Failed to delete MediaLive channel record", e);
                }

                needToCreateChannel = true;
            }

            if ([ChannelState.IDLE.toString(), ChannelState.STOPPING].includes(channelState)) {
                console.log(
                    "Starting stopped channel",
                    room.id,
                    room.mediaLiveChannel.mediaLiveChannelId,
                    channelState
                );
                await MediaLive.startChannel({
                    ChannelId: room.mediaLiveChannel.mediaLiveChannelId,
                });
            }

            if (channelState === ChannelState.RUNNING) {
                console.log("Channel is already running", room.id, room.mediaLiveChannel.mediaLiveChannelId);
            }

            if (
                [ChannelState.STARTING.toString(), ChannelState.CREATING, ChannelState.UPDATING].includes(channelState)
            ) {
                console.log(
                    "Channel is still starting",
                    room.id,
                    room.mediaLiveChannel.mediaLiveChannelId,
                    channelState
                );
            }

            if (channelState === ChannelState.RECOVERING) {
                console.log("Channel is recovering", room.id, room.mediaLiveChannel.mediaLiveChannelId);
            }
        }

        if (needToCreateChannel || !room.mediaLiveChannel) {
            console.log("Creating new MediaLive channel for room", room.id);
            await createNewChannelForRoom(room.id, room.conferenceId);
        }
    }
}

gql`
    query GetRoomsWithNoEvents($from: timestamptz, $to: timestamptz) {
        Room(
            where: {
                mediaLiveChannelId: { _is_null: false }
                _not: { events: { startTime: { _gte: $from, _lte: $to } } }
                _and: { _not: { events: { startTime: { _lte: $from }, endTime: { _gte: $from } } } }
            }
        ) {
            id
            mediaLiveChannel {
                id
                mediaLiveChannelId
            }
        }
    }
`;

export async function stopChannelsWithoutUpcomingOrCurrentEvents(): Promise<void> {
    console.log("Stopping channels with no recent or upcoming events");
    // TODO: perhaps this should look at transitions as well as events?
    const now = new Date();
    const from = now.toISOString();
    const to = new Date(now.getTime() + 120 * 60 * 1000).toISOString();

    const roomsResult = await apolloClient.query({
        query: GetRoomsWithNoEventsDocument,
        variables: {
            from,
            to,
        },
    });

    if (roomsResult.error || roomsResult.errors) {
        console.error(
            "Failure while retrieving rooms without upcoming or ongoing events",
            roomsResult.error,
            roomsResult.errors
        );
        return;
    }

    if (roomsResult.data.Room.length === 0) {
        console.log("No rooms without upcoming or ongoing events");
    }

    console.log(`Found ${roomsResult.data.Room.length} rooms without upcoming or ongoing events`);

    for (const room of roomsResult.data.Room) {
        if (room.mediaLiveChannel) {
            console.log("Ensuring channel for room is stopped", room.id);
            const channelState = await getMediaLiveChannelState(room.mediaLiveChannel.mediaLiveChannelId);

            if (channelState === ChannelState.RUNNING) {
                console.log("Stopping running channel", room.id, room.mediaLiveChannel.mediaLiveChannelId);
                await MediaLive.stopChannel({
                    ChannelId: room.mediaLiveChannel.mediaLiveChannelId,
                });
            }
        }
    }

    // TODO: delete channels that are no longer required
}

gql`
    mutation CreateMediaLiveChannel(
        $cloudFrontDistributionId: String!
        $mediaLiveChannelId: String!
        $mediaPackageChannelId: String!
        $mp4InputId: String!
        $rtmpInputId: String!
        $rtmpInputUri: String!
        $endpointUri: String!
        $cloudFrontDomain: String!
        $mp4InputAttachmentName: String!
        $loopingMp4InputAttachmentName: String!
        $vonageInputAttachmentName: String!
        $conferenceId: uuid!
    ) {
        insert_MediaLiveChannel_one(
            object: {
                cloudFrontDistributionId: $cloudFrontDistributionId
                mediaLiveChannelId: $mediaLiveChannelId
                mediaPackageChannelId: $mediaPackageChannelId
                mp4InputId: $mp4InputId
                rtmpInputId: $rtmpInputId
                rtmpInputUri: $rtmpInputUri
                endpointUri: $endpointUri
                cloudFrontDomain: $cloudFrontDomain
                mp4InputAttachmentName: $mp4InputAttachmentName
                loopingMp4InputAttachmentName: $loopingMp4InputAttachmentName
                vonageInputAttachmentName: $vonageInputAttachmentName
                conferenceId: $conferenceId
            }
        ) {
            id
        }
    }

    mutation SetMediaLiveChannelForRoom($roomId: uuid!, $mediaLiveChannelId: uuid!) {
        update_Room_by_pk(pk_columns: { id: $roomId }, _set: { mediaLiveChannelId: $mediaLiveChannelId }) {
            id
        }
    }
`;

interface ChannelResources {
    mediaLiveChannelIds: string[];
    mediaLiveInputIds: string[];
    mediaPackageChannelIds: string[];
    mediaPackageOriginEndpointIds: string[];
    cloudFrontDistributionIds: string[];
}

async function cleanUpChannelResources(channelResources: ChannelResources) {
    try {
        for (const mediaLiveChannelId of channelResources.mediaLiveChannelIds) {
            await MediaLive.deleteChannel({
                ChannelId: mediaLiveChannelId,
            });
        }
    } catch (e) {
        console.error("Failed to clean up MediaLive channels", e, channelResources.mediaLiveChannelIds);
    }

    try {
        for (const mediaPackageOriginEndpointId of channelResources.mediaPackageOriginEndpointIds) {
            await MediaPackage.deleteOriginEndpoint({
                Id: mediaPackageOriginEndpointId,
            });
        }
    } catch (e) {
        console.error(
            "Failed to clean up MediaPackage origin endpoints",
            e,
            channelResources.mediaPackageOriginEndpointIds
        );
    }

    try {
        // This may fail because the channel must be fully deleted before inputs can be deleted
        // TODO: come up with a better solution
        for (const mediaPackageChannelId of channelResources.mediaPackageChannelIds) {
            await MediaPackage.deleteChannel({
                Id: mediaPackageChannelId,
            });
        }
    } catch (e) {
        console.error("Failed to clean up MediaPackage channels", e, channelResources.mediaPackageChannelIds);
    }

    try {
        for (const mediaLiveInputId of channelResources.mediaLiveInputIds) {
            await MediaLive.deleteInput({
                InputId: mediaLiveInputId,
            });
        }
    } catch (e) {
        console.error("Failed to clean up MediaLive inputs", e, channelResources.mediaLiveInputIds);
    }

    try {
        // This will likely fail because CloudFront distributions must be disabled before deletion
        // TODO: come up with a better solution (polling? wait for event? scheduled reaping?)
        for (const cloudFrontDistributionId of channelResources.cloudFrontDistributionIds) {
            await CloudFront.deleteDistribution({
                Id: cloudFrontDistributionId,
            });
        }
    } catch (e) {
        console.error("Failed to clean up CloudFront distribution", e, channelResources.cloudFrontDistributionIds);
    }
}

async function getInputLossSlateUrl(conferenceId: string): Promise<string | null> {
    const inputLossSlateUrl = await getConferenceConfiguration<string>(conferenceId, "INPUT_LOSS_SLATE");
    return inputLossSlateUrl;
}

async function createNewChannelForRoom(roomId: string, conferenceId: string): Promise<void> {
    assert(
        process.env.AWS_MEDIALIVE_INPUT_SECURITY_GROUP_ID,
        "AWS_MEDIALIVE_INPUT_SECURITY_GROUP_ID environment variable must be defined"
    );
    let rtmpInput;
    let mp4InputId;
    let loopingMp4InputId;
    let mediaPackageChannelId;
    let originEndpoint;
    let mediaLiveChannel;
    let cloudFrontDistribution;
    try {
        rtmpInput = await createRtmpInput(roomId, process.env.AWS_MEDIALIVE_INPUT_SECURITY_GROUP_ID);
        mp4InputId = await createMP4Input(roomId, process.env.AWS_MEDIALIVE_INPUT_SECURITY_GROUP_ID);
        loopingMp4InputId = await createLoopingMP4Input(roomId, process.env.AWS_MEDIALIVE_INPUT_SECURITY_GROUP_ID);

        mediaPackageChannelId = await createMediaPackageChannel(roomId);
        originEndpoint = await createOriginEndpoint(roomId, mediaPackageChannelId);

        const inputLossSlateUrl = await getInputLossSlateUrl(conferenceId);

        mediaLiveChannel = await createMediaLiveChannel(
            roomId,
            rtmpInput.id,
            mp4InputId,
            loopingMp4InputId,
            mediaPackageChannelId,
            inputLossSlateUrl
        );
        cloudFrontDistribution = await createDistribution(roomId, originEndpoint);

        const result = await apolloClient.mutate({
            mutation: CreateMediaLiveChannelDocument,
            variables: {
                cloudFrontDistributionId: cloudFrontDistribution.id,
                cloudFrontDomain: cloudFrontDistribution.domain,
                endpointUri: originEndpoint.endpointUri,
                mediaLiveChannelId: mediaLiveChannel.channelId,
                rtmpInputId: rtmpInput.id,
                rtmpInputUri: rtmpInput.rtmpUri,
                mediaPackageChannelId: mediaPackageChannelId,
                mp4InputId: mp4InputId,
                mp4InputAttachmentName: mediaLiveChannel.mp4InputAttachmentName,
                loopingMp4InputAttachmentName: mediaLiveChannel.loopingMp4InputAttachmentName,
                vonageInputAttachmentName: mediaLiveChannel.vonageInputAttachmentName,
                conferenceId,
            },
        });

        if (result.errors) {
            console.error(
                "Failure while saving details of new MediaLive channel",
                mediaLiveChannel.channelId,
                roomId,
                result.errors
            );
            throw new Error("Failure while saving details of new MediaLive channel");
        }

        const updateResult = await apolloClient.mutate({
            mutation: SetMediaLiveChannelForRoomDocument,
            variables: {
                roomId,
                mediaLiveChannelId: result.data?.insert_MediaLiveChannel_one?.id,
            },
        });

        if (updateResult.errors) {
            console.error(
                "Failure while storing new MediaLive channel against room",
                result.data?.insert_MediaLiveChannel_one?.id,
                roomId,
                result.errors
            );
        }
    } catch (e) {
        // If any of the above process failed, attempt to clean up
        console.error("Failed to create new MediaLive channel. Attempting to clean up any resources.", e);
        await cleanUpChannelResources({
            mediaLiveChannelIds: [mediaLiveChannel?.channelId].filter(notEmpty),
            cloudFrontDistributionIds: [cloudFrontDistribution?.id].filter(notEmpty),
            mediaLiveInputIds: [rtmpInput?.id, mp4InputId, loopingMp4InputId].filter(notEmpty),
            mediaPackageChannelIds: [mediaPackageChannelId].filter(notEmpty),
            mediaPackageOriginEndpointIds: [originEndpoint?.id].filter(notEmpty),
        });
    }
}

gql`
    query GetRoomsWithEvents {
        Room(where: { events: { intendedRoomModeName: { _in: [Q_AND_A, PRERECORDED, PRESENTATION] } } }) {
            id
        }
    }
`;

export async function syncChannelSchedules(): Promise<{ [roomId: string]: boolean }> {
    // TODO: only look at future/current events?
    const rooms = await apolloClient.query({
        query: GetRoomsWithEventsDocument,
    });

    if (rooms.error || rooms.errors) {
        console.error("Could not get rooms with events to sync channel schedules", rooms.error, rooms.errors);
    }

    const holdOffOnCreatingChannel: { [roomId: string]: boolean } = {};
    for (const room of rooms.data.Room) {
        try {
            holdOffOnCreatingChannel[room.id] = await syncChannelSchedule(room.id);
        } catch (e) {
            console.error("Failure while syncing channel schedule", room.id, e);
            continue;
        }
    }

    return holdOffOnCreatingChannel;
}

gql`
    query GetMediaLiveChannelByRoom($roomId: uuid!) {
        Room_by_pk(id: $roomId) {
            id
            conferenceId
            mediaLiveChannel {
                id
                mediaLiveChannelId
                mp4InputAttachmentName
                vonageInputAttachmentName
                loopingMp4InputAttachmentName
            }
        }
    }
`;

gql`
    query GetTransitionsByRoom($roomId: uuid!) {
        Transitions(where: { roomId: { _eq: $roomId } }) {
            broadcastContentItem {
                id
                input
                inputTypeName
            }
            id
            time
        }
    }
`;

interface ComparableScheduleAction {
    name: string;
    mp4Key?: string;
    inputAttachmentNameSuffix: string;
    timeMillis: number;
    invalid?: boolean;
}

// Return value: whether to hold off on recreating the channel
export async function syncChannelSchedule(roomId: string): Promise<boolean> {
    console.log("Attempting to sync channel schedule", roomId);
    const channelResult = await apolloClient.query({
        query: GetMediaLiveChannelByRoomDocument,
        variables: {
            roomId,
        },
    });

    if (!channelResult.data.Room_by_pk?.mediaLiveChannel?.mediaLiveChannelId) {
        console.warn("No MediaLive channel details found for room. Skipping schedule sync.", roomId);
        return false;
    }

    const channel = channelResult.data.Room_by_pk.mediaLiveChannel;

    const mediaLiveChannel = await MediaLive.describeChannel({
        ChannelId: channel.mediaLiveChannelId,
    });

    if (mediaLiveChannel.State !== "IDLE" && mediaLiveChannel.State !== "RUNNING") {
        console.warn("Cannot sync channel schedule", roomId, channel.id, mediaLiveChannel.State);
        return true;
    }

    const allTransitionsResult = await apolloClient.query({
        query: GetTransitionsByRoomDocument,
        variables: {
            roomId,
        },
    });

    if (allTransitionsResult.error || allTransitionsResult.errors) {
        console.error("Error while retrieving transitions for room. Skipping schedule sync.", roomId);
        return false;
    }

    // Generate a simplified representation of what the channel schedule 'ought' to be
    const transitions = allTransitionsResult.data.Transitions;
    let fillerVideoKey;
    try {
        fillerVideoKey = await getFillerVideo(channelResult.data.Room_by_pk?.conferenceId);
    } catch (e) {
        console.warn("Could not retrieve filler video", channelResult.data.Room_by_pk.conferenceId);
    }
    const expectedSchedule = R.flatten(
        transitions.map((transition) => {
            const input: BroadcastContentItemInput = transition.broadcastContentItem.input;
            if (input.type === "MP4Input") {
                const { key } = new AmazonS3URI(input.s3Url);

                if (!key) {
                    return [];
                }

                const switchAction: ComparableScheduleAction = {
                    name: `${transition.id}`,
                    mp4Key: key,
                    inputAttachmentNameSuffix: "mp4",
                    timeMillis: Date.parse(transition.time),
                };

                return [switchAction];
            } else if (input.type === "VonageInput") {
                return [
                    {
                        name: `${transition.id}`,
                        inputAttachmentNameSuffix: "vonage",
                        timeMillis: Date.parse(transition.time),
                    },
                ];
            } else {
                return [];
            }
        })
    );

    // Generate a simplified version of what the channel schedule 'actually' is
    const existingSchedule = await MediaLive.describeSchedule({
        ChannelId: channel.mediaLiveChannelId,
    });

    const actualSchedule =
        existingSchedule.ScheduleActions?.map((action) => {
            if (!action.ActionName) {
                return null;
            }
            if (!action.ScheduleActionStartSettings?.FixedModeScheduleActionStartSettings) {
                return null;
            }
            if (action.ScheduleActionSettings?.InputPrepareSettings) {
                const result: ComparableScheduleAction = {
                    inputAttachmentNameSuffix: "mp4",
                    name: action.ActionName,
                    mp4Key:
                        action.ScheduleActionSettings.InputPrepareSettings.UrlPath?.length === 1
                            ? action.ScheduleActionSettings.InputPrepareSettings.UrlPath[0]
                            : "",
                    timeMillis: Date.parse(
                        action.ScheduleActionStartSettings.FixedModeScheduleActionStartSettings.Time ??
                            "1970-01-01T00:00:00+0000"
                    ),
                };
                return result;
            } else if (action.ScheduleActionSettings?.InputSwitchSettings) {
                if (
                    action.ScheduleActionSettings.InputSwitchSettings.InputAttachmentNameReference?.endsWith("-vonage")
                ) {
                    const result: ComparableScheduleAction = {
                        inputAttachmentNameSuffix: "vonage",
                        name: action.ActionName,
                        timeMillis: Date.parse(
                            action.ScheduleActionStartSettings.FixedModeScheduleActionStartSettings.Time ??
                                "1970-01-01T00:00:00+0000"
                        ),
                    };
                    return result;
                } else if (
                    action.ScheduleActionSettings.InputSwitchSettings.InputAttachmentNameReference?.endsWith("mp4")
                ) {
                    const result: ComparableScheduleAction = {
                        inputAttachmentNameSuffix: "mp4",
                        name: action.ActionName,
                        mp4Key:
                            action.ScheduleActionSettings.InputSwitchSettings.UrlPath?.length === 1
                                ? action.ScheduleActionSettings.InputSwitchSettings.UrlPath[0]
                                : "",
                        timeMillis: Date.parse(
                            action.ScheduleActionStartSettings?.FixedModeScheduleActionStartSettings?.Time ??
                                "1970-01-01T00:00:00+0000"
                        ),
                    };
                    return result;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }).filter(notEmpty) ?? [];

    // Identify schedule actions that are not mean to be there and delete them
    const unexpectedScheduleItems = R.without(expectedSchedule, actualSchedule);

    console.log(
        `Removing ${unexpectedScheduleItems.length} expired items from channel schedule`,
        roomId,
        channel.mediaLiveChannelId
    );
    try {
        const unexpectedFollowScheduleActions = existingSchedule.ScheduleActions?.filter(
            (action) =>
                action.ScheduleActionStartSettings?.FollowModeScheduleActionStartSettings?.ReferenceActionName &&
                unexpectedScheduleItems.find(
                    (item) =>
                        item.name ===
                        action.ScheduleActionStartSettings?.FollowModeScheduleActionStartSettings?.ReferenceActionName
                )
        );
        if (unexpectedFollowScheduleActions && unexpectedFollowScheduleActions.length > 0) {
            await MediaLive.batchUpdateSchedule({
                ChannelId: channel.mediaLiveChannelId,
                Deletes: {
                    ActionNames: unexpectedFollowScheduleActions?.map((item) => item.ActionName).filter(notEmpty),
                },
            });
        }

        await MediaLive.batchUpdateSchedule({
            ChannelId: channel.mediaLiveChannelId,
            Deletes: {
                ActionNames: unexpectedScheduleItems.map((item) => item.name),
            },
        });
    } catch (e) {
        console.error(
            "Error while deleting items from schedule. Attempting to stop the channel so that items can be deleted while it is idle.",
            roomId,
            channel.mediaLiveChannelId,
            e
        );
        await MediaLive.stopChannel({
            ChannelId: channel.mediaLiveChannelId,
        });
        return true;
    }

    // Go through each transition and create any missing schedule actions
    console.log("Refetching updated channel schedule", roomId, channel.mediaLiveChannelId);
    const trimmedSchedule = await MediaLive.describeSchedule({
        ChannelId: channel.mediaLiveChannelId,
    });

    const trimmedScheduleActionNames =
        trimmedSchedule.ScheduleActions?.map((action) => action.ActionName).filter(notEmpty) ?? [];

    const earliestInsertionTime = new Date().getTime() + 30000;

    console.log("Generating list of new schedule actions", roomId, channel.mediaLiveChannelId);
    const newScheduleActions: ScheduleAction[] = [];
    for (const transition of allTransitionsResult.data.Transitions) {
        // Don't try to insert transitions in the next 30s (AWS limit: 15s after present)
        if (Date.parse(transition.time) < earliestInsertionTime) {
            continue;
        }

        const input: BroadcastContentItemInput = transition.broadcastContentItem.input;
        if (transition.broadcastContentItem.inputTypeName === InputType_Enum.Mp4 && input.type === "MP4Input") {
            let urlPath;
            try {
                const { key } = new AmazonS3URI(input.s3Url);
                urlPath = key;
            } catch (e) {
                console.error("Invalid S3 uri on transition", input.s3Url, transition.id, roomId);
                continue;
            }
            if (!trimmedScheduleActionNames.includes(`${transition.id}`) && urlPath) {
                newScheduleActions.push({
                    ActionName: `${transition.id}`,
                    ScheduleActionSettings: {
                        InputSwitchSettings: {
                            InputAttachmentNameReference: channel.mp4InputAttachmentName,
                            UrlPath: [urlPath],
                        },
                    },
                    ScheduleActionStartSettings: {
                        FixedModeScheduleActionStartSettings: {
                            Time: new Date(Date.parse(transition.time)).toISOString(),
                        },
                    },
                });

                if (fillerVideoKey) {
                    newScheduleActions.push({
                        ActionName: `${transition.id}-follow`,
                        ScheduleActionSettings: {
                            InputSwitchSettings: {
                                InputAttachmentNameReference: channel.loopingMp4InputAttachmentName,
                                UrlPath: [fillerVideoKey],
                            },
                        },
                        ScheduleActionStartSettings: {
                            FollowModeScheduleActionStartSettings: {
                                FollowPoint: FollowPoint.END,
                                ReferenceActionName: `${transition.id}`,
                            },
                        },
                    });
                }
            }
        } else if (
            transition.broadcastContentItem.inputTypeName === InputType_Enum.VonageSession &&
            input.type === "VonageInput"
        ) {
            if (!trimmedScheduleActionNames.includes(`${transition.id}`)) {
                newScheduleActions.push({
                    ActionName: `${transition.id}`,
                    ScheduleActionSettings: {
                        InputSwitchSettings: {
                            InputAttachmentNameReference: channel.vonageInputAttachmentName,
                        },
                    },
                    ScheduleActionStartSettings: {
                        FixedModeScheduleActionStartSettings: {
                            Time: new Date(Date.parse(transition.time)).toISOString(),
                        },
                    },
                });
            }
        }
    }
    console.log(
        `Generated ${newScheduleActions.length} new schedule actions for channel`,
        roomId,
        channel.mediaLiveChannelId
    );

    console.log("Updating channel schedule", roomId, channel.mediaLiveChannelId);
    await MediaLive.batchUpdateSchedule({
        // todo
        ChannelId: channel.mediaLiveChannelId,
        Creates: {
            ScheduleActions: newScheduleActions,
        },
    });

    return false;
}

export async function switchToFillerVideo(channelResourceId: string): Promise<void> {
    console.log("Switching to filler video", channelResourceId);

    // Figure out which conference this MediaLive channel belongs to
    gql`
        query GetConferenceIdFromChannelResourceId($channelResourceId: String!) {
            MediaLiveChannel(where: { mediaLiveChannelId: { _eq: $channelResourceId } }) {
                id
                room {
                    id
                    conferenceId
                }
            }
        }
    `;

    const conferenceIdResult = await apolloClient.query({
        query: GetConferenceIdFromChannelResourceIdDocument,
        variables: {
            channelResourceId,
        },
    });

    if (conferenceIdResult.error || conferenceIdResult.errors) {
        console.error(
            "Error while retrieving conference ID for MediaLive channel resource",
            channelResourceId,
            conferenceIdResult.error,
            conferenceIdResult.errors
        );
        return;
    }

    if (conferenceIdResult.data.MediaLiveChannel.length !== 1 || !conferenceIdResult.data.MediaLiveChannel[0].room) {
        console.error(
            "Expected exactly one conference to be associated with MediaLive channel resource",
            channelResourceId
        );
        return;
    }

    const conferenceId = conferenceIdResult.data.MediaLiveChannel[0].room.conferenceId;

    let fillerVideoKey;
    try {
        fillerVideoKey = await getFillerVideo(conferenceId);
    } catch (e) {
        console.warn("Could not find filler video, will not switch to it.");
        return;
    }

    // Determine which input is the looping one
    const channelDescription = await MediaLive.describeChannel({
        ChannelId: channelResourceId,
    });

    const loopingAttachmentName = channelDescription.InputAttachments?.find((attachment) =>
        attachment.InputAttachmentName?.endsWith("-looping")
    )?.InputAttachmentName;

    if (!loopingAttachmentName) {
        console.error(
            "Could not find the looping attachment on the MediaLive channel.",
            channelResourceId,
            channelDescription.InputAttachments
        );
        return;
    }

    await MediaLive.batchUpdateSchedule({
        ChannelId: channelResourceId,
        Creates: {
            ScheduleActions: [
                {
                    ActionName: `${shortId()}-fallback`,
                    ScheduleActionSettings: {
                        InputSwitchSettings: {
                            InputAttachmentNameReference: loopingAttachmentName,
                            UrlPath: [fillerVideoKey],
                        },
                    },
                    ScheduleActionStartSettings: {
                        ImmediateModeScheduleActionStartSettings: {},
                    },
                },
            ],
        },
    });
}

async function getFillerVideo(conferenceId: string): Promise<string> {
    let urlPath;
    try {
        const fillerVideosConfiguration = await getConferenceConfiguration<string[]>(conferenceId, "FILLER_VIDEOS");
        if (!fillerVideosConfiguration || fillerVideosConfiguration.length < 1) {
            throw new Error("Could not retrieve FILLER_VIDEOS configuration for conference");
        }

        const { key } = new AmazonS3URI(fillerVideosConfiguration[0]);
        urlPath = key;
    } catch (e) {
        console.error("Error parsing filler video URI", conferenceId, e);
    }

    if (!urlPath) {
        console.error("Could not parse filler video URI", conferenceId, urlPath);
        throw new Error("Could not parse filler video URI");
    }

    return urlPath;
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}
