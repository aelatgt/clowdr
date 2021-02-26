import { gql } from "@apollo/client";
import { Color3, FresnelParameters, Mesh, Nullable, PhysicsImpostor, Texture, Vector3 } from "@babylonjs/core";
import "@babylonjs/core/Physics/physicsEngineComponent"; // side-effect adds scene.enablePhysics function
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Heading,
    HStack,
    Text,
    useColorModeValue,
    useToast,
    useToken,
    VStack,
} from "@chakra-ui/react";
import type { ContentItemDataBlob, ZoomBlob } from "@clowdr-app/shared-types/build/content";
import { formatRelative } from "date-fns";
import * as R from "ramda";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Engine, Scene } from "react-babylonjs";
import ReactPlayer from "react-player";
import { Redirect, useHistory } from "react-router-dom";
import {
    ContentGroupType_Enum,
    RoomMode_Enum,
    RoomPage_RoomDetailsFragment,
    Room_CurrentEventSummaryFragment,
    Room_EventSummaryFragment,
    useRoomBackstage_GetEventBreakoutRoomQuery,
    useRoom_GetCurrentEventQuery,
    useRoom_GetEventsQuery,
} from "../../../../generated/graphql";
import { ExternalLinkButton } from "../../../Chakra/LinkButton";
import { Chat } from "../../../Chat/Chat";
import type { ChatSources } from "../../../Chat/Configuration";
import usePolling from "../../../Generic/usePolling";
import { useRealTime } from "../../../Generic/useRealTime";
import RoomParticipantsProvider from "../../../Room/RoomParticipantsProvider";
import { useConference } from "../../useConference";
import { ContentGroupSummaryWrapper } from "../Content/ContentGroupSummary";
import { BreakoutVonageRoom } from "./BreakoutVonageRoom";
import { RoomBackstage } from "./RoomBackstage";
import { RoomControlBar } from "./RoomControlBar";
import { RoomTitle } from "./RoomTitle";
import { RoomSponsorContent } from "./Sponsor/RoomSponsorContent";
import { useCurrentRoomEvent } from "./useCurrentRoomEvent";

interface AppProps {}

const gravityVector = new Vector3(0, -9.81, 0);
let sphere: Nullable<Mesh> = null;

const onButtonClicked = () => {
    if (sphere !== null) {
        sphere.physicsImpostor!.applyImpulse(Vector3.Up().scale(10), sphere.getAbsolutePosition());
    }
};

gql`
    query Room_GetCurrentEvent($currentEventId: uuid!) {
        Event_by_pk(id: $currentEventId) {
            ...Room_CurrentEventSummary
        }
    }

    fragment Room_CurrentEventSummary on Event {
        id
        contentGroup {
            id
            title
            contentGroupTypeName
            contentItems(where: { contentTypeName: { _eq: ZOOM } }, limit: 1) {
                id
                data
            }
            chatId
        }
    }

    query Room_GetEvents($roomId: uuid!) {
        Event(where: { roomId: { _eq: $roomId } }) {
            ...Room_EventSummary
        }
    }

    fragment Room_EventSummary on Event {
        id
        conferenceId
        startTime
        name
        endTime
        intendedRoomModeName
        contentGroupId
        contentGroup {
            id
            title
        }
    }
`;

function hasShuffleRoomEnded({ startedAt, durationMinutes }: { startedAt: string; durationMinutes: number }): boolean {
    const startedAtMs = Date.parse(startedAt);
    const durationMs = durationMinutes * 60 * 1000;
    const now = Date.now();
    return startedAtMs + durationMs < now;
}

function isShuffleRoomEndingSoon(
    { startedAt, durationMinutes }: { startedAt: string; durationMinutes: number },
    now: number
): boolean {
    const startedAtMs = Date.parse(startedAt);
    const durationMs = durationMinutes * 60 * 1000;
    return startedAtMs + durationMs < now + 30000;
}

export function Room({ roomDetails }: { roomDetails: RoomPage_RoomDetailsFragment }): JSX.Element {
    const [roomEvents, setRoomEvents] = useState<readonly Room_EventSummaryFragment[]>([]);
    const { data, refetch } = useRoom_GetEventsQuery({
        variables: {
            roomId: roomDetails.id,
        },
    });
    const [show, setShow] = useState(true);

    const activateLasers = () => {
        setShow(!show);
    };

    const sphereRef = useCallback((_) => {}, []);

    useEffect(() => {
        if (data) {
            setRoomEvents(data.Event);
        }
    }, [data]);
    usePolling(refetch, 120000, true);

    const {
        currentRoomEvent,
        nextRoomEvent,
        withinThreeMinutesOfBroadcastEvent,
        secondsUntilBroadcastEvent,
        secondsUntilZoomEvent,
    } = useCurrentRoomEvent(roomEvents);

    const now = useRealTime(5000);

    const [green100, green700, gray100, gray800] = useToken("colors", [
        "green.100",
        "green.700",
        "gray.100",
        "gray.900",
    ]);
    const nextBgColour = useColorModeValue(green100, green700);
    const bgColour = useColorModeValue(gray100, gray800);

    const hlsUri = useMemo(() => {
        if (!roomDetails.mediaLiveChannel) {
            return null;
        }
        const finalUri = new URL(roomDetails.mediaLiveChannel.endpointUri);
        finalUri.hostname = roomDetails.mediaLiveChannel.cloudFrontDomain;
        return finalUri.toString();
    }, [roomDetails.mediaLiveChannel]);

    const [intendPlayStream, setIntendPlayStream] = useState<boolean>(true);

    const [backstage, setBackstage] = useState<boolean>(false);

    const secondsUntilNonBreakoutEvent = useMemo(() => Math.min(secondsUntilBroadcastEvent, secondsUntilZoomEvent), [
        secondsUntilBroadcastEvent,
        secondsUntilZoomEvent,
    ]);

    const [currentEventData, setCurrentEventData] = useState<Room_CurrentEventSummaryFragment | null>(null);
    const { refetch: refetchCurrentEventData } = useRoom_GetCurrentEventQuery({
        skip: true,
        fetchPolicy: "network-only",
    });

    useEffect(() => {
        async function fn() {
            if (currentRoomEvent) {
                try {
                    const { data } = await refetchCurrentEventData({
                        currentEventId: currentRoomEvent.id,
                    });

                    if (data) {
                        setCurrentEventData(data.Event_by_pk ?? null);
                    }
                } catch (e) {
                    console.error("Could not fetch current event data");
                }
            } else {
                setCurrentEventData(null);
            }
        }
        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentRoomEvent]);

    const maybeCurrentEventZoomDetails = useMemo(() => {
        try {
            const zoomItems = currentEventData?.contentGroup?.contentItems;

            if (!zoomItems || zoomItems.length < 1) {
                return undefined;
            }

            const versions = zoomItems[0].data as ContentItemDataBlob;

            return (R.last(versions)?.data as ZoomBlob).url;
        } catch (e) {
            console.error("Error finding current event Zoom details", e);
            return undefined;
        }
    }, [currentEventData?.contentGroup?.contentItems]);

    const chatSources = useMemo((): ChatSources | undefined => {
        if (currentEventData?.contentGroup) {
            return {
                chatId: roomDetails.chatId ?? undefined,
                chatLabel: "Room",
                chatTitle: roomDetails.name,
            };
        } else if (roomDetails.chatId) {
            return {
                chatId: roomDetails.chatId,
                chatLabel: "Room",
                chatTitle: roomDetails.name,
            };
        } else {
            return undefined;
        }
    }, [currentEventData?.contentGroup, roomDetails.chatId, roomDetails.name]);

    const chatEl = useMemo(
        () =>
            chatSources ? (
                <Chat
                    sources={{ ...chatSources }}
                    flexBasis={0}
                    flexGrow={1}
                    mr={4}
                    maxHeight={["80vh", "80vh", "80vh", "850px"]}
                />
            ) : (
                <>No chat found for this room.</>
            ),
        [chatSources]
    );

    const controlBarEl = useMemo(
        () => (
            <RoomParticipantsProvider roomId={roomDetails.id}>
                <RoomControlBar
                    roomDetails={roomDetails}
                    onSetBackstage={setBackstage}
                    backstage={backstage}
                    hasBackstage={!!hlsUri}
                    breakoutRoomEnabled={
                        secondsUntilNonBreakoutEvent > 180 && !withinThreeMinutesOfBroadcastEvent && !backstage
                    }
                />
            </RoomParticipantsProvider>
        ),
        [backstage, hlsUri, roomDetails, secondsUntilNonBreakoutEvent, withinThreeMinutesOfBroadcastEvent]
    );

    const backStageEl = useMemo(
        () => (
            <RoomBackstage
                backstage={backstage}
                roomName={roomDetails.name}
                roomEvents={roomEvents}
                currentRoomEventId={currentRoomEvent?.id}
            />
        ),
        [backstage, currentRoomEvent?.id, roomDetails.name, roomEvents]
    );

    const playerEl = useMemo(
        () =>
            hlsUri && withinThreeMinutesOfBroadcastEvent ? (
                <Box display={backstage ? "none" : "block"}>
                    <ReactPlayer
                        width="100%"
                        height="auto"
                        url={hlsUri}
                        config={{
                            file: {
                                hlsOptions: {},
                            },
                        }}
                        playing={
                            (withinThreeMinutesOfBroadcastEvent || !!currentRoomEvent) && !backstage && intendPlayStream
                        }
                        controls={true}
                        onPause={() => setIntendPlayStream(false)}
                        onPlay={() => setIntendPlayStream(true)}
                    />
                </Box>
            ) : (
                <></>
            ),
        [backstage, currentRoomEvent, hlsUri, intendPlayStream, withinThreeMinutesOfBroadcastEvent]
    );

    const breakoutVonageRoomEl = useMemo(() => <BreakoutVonageRoom room={roomDetails} />, [roomDetails]);

    const contentEl = useMemo(
        () => (
            <Box flexGrow={1}>
                <RoomTitle roomDetails={roomDetails} />

                {currentRoomEvent ? (
                    <Box backgroundColor={bgColour} borderRadius={5} px={5} py={3} my={5}>
                        <Text>Started {formatRelative(Date.parse(currentRoomEvent.startTime), now)}</Text>
                        <Heading as="h3" textAlign="left" size="lg" mb={2}>
                            {currentRoomEvent.name}
                        </Heading>
                        {currentRoomEvent?.contentGroupId ? (
                            <ContentGroupSummaryWrapper
                                contentGroupId={currentRoomEvent.contentGroupId}
                                linkToItem={true}
                            />
                        ) : (
                            <></>
                        )}
                    </Box>
                ) : (
                    <></>
                )}
                {nextRoomEvent ? (
                    <Box backgroundColor={nextBgColour} borderRadius={5} px={5} py={3} my={5}>
                        <Text>Starts {formatRelative(Date.parse(nextRoomEvent.startTime), now)}</Text>
                        <Heading as="h3" textAlign="left" size="lg" mb={2}>
                            {nextRoomEvent.name}
                        </Heading>
                        {nextRoomEvent?.contentGroupId ? (
                            <ContentGroupSummaryWrapper
                                contentGroupId={nextRoomEvent.contentGroupId}
                                linkToItem={true}
                            />
                        ) : (
                            <></>
                        )}
                    </Box>
                ) : (
                    <></>
                )}

                {!currentRoomEvent && !nextRoomEvent ? <Text p={5}>No current event in this room.</Text> : <></>}

                {show ? (
                    <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
                        <Scene>
                            <arcRotateCamera
                                name="arc"
                                target={new Vector3(0, 1, 0)}
                                alpha={-Math.PI / 2}
                                beta={0.5 + Math.PI / 4}
                                radius={4}
                                minZ={0.001}
                                wheelPrecision={50}
                                lowerRadiusLimit={8}
                                upperRadiusLimit={20}
                                upperBetaLimit={Math.PI / 2}
                            />
                            <hemisphericLight name="hemi" direction={new Vector3(0, -1, 0)} intensity={0.8} />
                            <directionalLight
                                name="shadow-light"
                                setDirectionToTarget={[Vector3.Zero()]}
                                direction={Vector3.Zero()}
                                position={new Vector3(-40, 30, -40)}
                                intensity={0.4}
                                shadowMinZ={1}
                                shadowMaxZ={2500}
                            >
                                <shadowGenerator
                                    mapSize={1024}
                                    useBlurExponentialShadowMap={true}
                                    blurKernel={32}
                                    darkness={0.8}
                                    shadowCasters={["sphere1", "dialog"]}
                                    forceBackFacesOnly={true}
                                    depthScale={100}
                                />
                            </directionalLight>
                            <sphere
                                ref={sphereRef}
                                name="sphere1"
                                diameter={2}
                                segments={16}
                                position={new Vector3(0, 2.5, 0)}
                            >
                                <physicsImpostor
                                    type={PhysicsImpostor.SphereImpostor}
                                    _options={{ mass: 1, restitution: 0.9 }}
                                />
                                <standardMaterial
                                    name="material1"
                                    specularPower={16}
                                    diffuseColor={Color3.Black()}
                                    emissiveColor={new Color3(0.5, 0.5, 0.5)}
                                    reflectionFresnelParameters={FresnelParameters.Parse({
                                        isEnabled: true,
                                        leftColor: [1, 1, 1],
                                        rightColor: [0, 0, 0],
                                        bias: 0.1,
                                        power: 1,
                                    })}
                                />
                                <plane
                                    name="dialog"
                                    size={2}
                                    position={new Vector3(0, 1.5, 0)}
                                    sideOrientation={Mesh.BACKSIDE}
                                >
                                    <advancedDynamicTexture
                                        name="dialogTexture"
                                        height={1024}
                                        width={1024}
                                        createForParentMesh={true}
                                        hasAlpha={true}
                                        generateMipMaps={true}
                                        samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
                                    >
                                        <rectangle
                                            name="rect-1"
                                            height={0.5}
                                            width={1}
                                            thickness={12}
                                            cornerRadius={12}
                                        >
                                            <rectangle>
                                                <babylon-button
                                                    name="close-icon"
                                                    background="green"
                                                    onPointerDownObservable={onButtonClicked}
                                                >
                                                    <textBlock
                                                        text={"\uf00d click me"}
                                                        fontFamily="FontAwesome"
                                                        fontStyle="bold"
                                                        fontSize={200}
                                                        color="white"
                                                    />
                                                </babylon-button>
                                            </rectangle>
                                        </rectangle>
                                    </advancedDynamicTexture>
                                </plane>
                            </sphere>

                            <ground name="ground1" width={10} height={10} subdivisions={2} receiveShadows={true}>
                                <physicsImpostor
                                    type={PhysicsImpostor.BoxImpostor}
                                    _options={{ mass: 0, restitution: 0.9 }}
                                />
                            </ground>
                            <vrExperienceHelper
                                webVROptions={{ createDeviceOrientationCamera: false }}
                                enableInteractions={true}
                            />
                        </Scene>
                    </Engine>
                ) : (
                    <></>
                )}

                <button onClick={activateLasers}>Activate Lasers</button>

                {roomDetails.originatingContentGroup?.id &&
                roomDetails.originatingContentGroup.contentGroupTypeName !== ContentGroupType_Enum.Sponsor ? (
                    <Box backgroundColor={bgColour} borderRadius={5} px={5} py={3} my={5}>
                        <ContentGroupSummaryWrapper
                            contentGroupId={roomDetails.originatingContentGroup.id}
                            linkToItem={true}
                        />
                    </Box>
                ) : (
                    <></>
                )}

                {roomDetails.originatingContentGroup ? (
                    <RoomSponsorContent contentGroupId={roomDetails.originatingContentGroup.id} />
                ) : (
                    <></>
                )}
            </Box>
        ),
        [bgColour, currentRoomEvent, nextBgColour, nextRoomEvent, now, roomDetails]
    );

    const [sendShuffleRoomNotification, setSendShuffleRoomNotification] = useState<boolean>(false);
    useEffect(() => {
        if (roomDetails.shuffleRooms.length > 0 && isShuffleRoomEndingSoon(roomDetails.shuffleRooms[0], now)) {
            setSendShuffleRoomNotification(true);
        }
    }, [roomDetails.shuffleRooms, now]);

    const toast = useToast();
    useEffect(() => {
        if (sendShuffleRoomNotification) {
            toast({
                title: "30 seconds left...",
                description: "...then you'll be moved back to the shuffle home page",
                status: "warning",
                duration: 27000,
                isClosable: true,
                position: "top-right",
            });
        }
    }, [sendShuffleRoomNotification, toast]);

    // Q&A spinoff
    const [existingCurrentRoomEvent, setExistingCurrentRoomEvent] = useState<Room_EventSummaryFragment | null>(
        currentRoomEvent
    );
    const conference = useConference();
    const { refetch: refetchBreakout } = useRoomBackstage_GetEventBreakoutRoomQuery({
        skip: true,
        fetchPolicy: "network-only",
    });
    const history = useHistory();
    useEffect(() => {
        async function fn() {
            try {
                if (
                    !backstage &&
                    existingCurrentRoomEvent &&
                    (existingCurrentRoomEvent.intendedRoomModeName === RoomMode_Enum.Presentation ||
                        existingCurrentRoomEvent.intendedRoomModeName === RoomMode_Enum.QAndA) &&
                    existingCurrentRoomEvent.id !== currentRoomEvent?.id
                ) {
                    try {
                        const breakoutRoom = await refetchBreakout({ originatingEventId: existingCurrentRoomEvent.id });

                        if (!breakoutRoom.data || !breakoutRoom.data.Room || breakoutRoom.data.Room.length < 1) {
                            throw new Error("No matching room found");
                        }

                        toast({
                            status: "info",
                            duration: 15000,
                            isClosable: true,
                            position: "bottom-right",
                            title: "Spinoff room created",
                            description: (
                                <VStack alignItems="flex-start">
                                    <Text>You can continue the discussion asynchronously in a spinoff room.</Text>
                                    <Button
                                        onClick={() =>
                                            history.push(
                                                `/conference/${conference.slug}/room/${breakoutRoom.data.Room[0].id}`
                                            )
                                        }
                                        colorScheme="green"
                                    >
                                        Join the spinoff room
                                    </Button>
                                </VStack>
                            ),
                        });
                    } catch (e) {
                        console.error(
                            "Error while moving to breakout room at end of event",
                            existingCurrentRoomEvent.id,
                            e
                        );
                        return;
                    }
                }
            } finally {
                setExistingCurrentRoomEvent(currentRoomEvent);
            }
        }
        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentRoomEvent]);

    return roomDetails.shuffleRooms.length > 0 && hasShuffleRoomEnded(roomDetails.shuffleRooms[0]) ? (
        <Redirect
            to={`/conference/${conference.slug}/shuffle${
                !roomDetails.shuffleRooms[0].reshuffleUponEnd ? "/ended" : ""
            }`}
        />
    ) : (
        <HStack width="100%" flexWrap="wrap" alignItems="stretch">
            <VStack
                textAlign="left"
                p={2}
                flexGrow={2.5}
                alignItems="stretch"
                flexBasis={0}
                minW={["100%", "100%", "100%", "700px"]}
                maxW="100%"
            >
                {controlBarEl}
                {backStageEl}

                {secondsUntilNonBreakoutEvent >= 180 && secondsUntilNonBreakoutEvent <= 300 ? (
                    <Alert status="warning">
                        <AlertIcon />
                        Event starting soon. Breakout room closes in {Math.round(
                            secondsUntilNonBreakoutEvent - 180
                        )}{" "}
                        seconds
                    </Alert>
                ) : (
                    <></>
                )}

                {secondsUntilBroadcastEvent > 0 && secondsUntilBroadcastEvent < 180 ? (
                    <Alert status="info">
                        <AlertIcon />
                        Event starting in {Math.round(secondsUntilBroadcastEvent)} seconds
                    </Alert>
                ) : (
                    <></>
                )}

                {secondsUntilZoomEvent > 0 && secondsUntilZoomEvent < 180 ? (
                    <Alert status="info">
                        <AlertIcon />
                        Event starting in {Math.round(secondsUntilZoomEvent)} seconds
                    </Alert>
                ) : (
                    <></>
                )}

                {maybeCurrentEventZoomDetails ? (
                    <ExternalLinkButton
                        to={maybeCurrentEventZoomDetails}
                        isExternal={true}
                        colorScheme="green"
                        size="lg"
                    >
                        Go to Zoom ({currentRoomEvent?.name})
                    </ExternalLinkButton>
                ) : (
                    <></>
                )}

                {playerEl}

                {secondsUntilNonBreakoutEvent > 180 && !withinThreeMinutesOfBroadcastEvent && !backstage ? (
                    <Box display={backstage ? "none" : "block"} bgColor={bgColour} p={2} pt={5} borderRadius="md">
                        {breakoutVonageRoomEl}
                    </Box>
                ) : (
                    <></>
                )}

                {contentEl}
            </VStack>
            <VStack flexGrow={1} flexBasis={0} minW={["100%", "100%", "100%", "40vw"]}>
                {chatEl}
            </VStack>
        </HStack>
    );
}
