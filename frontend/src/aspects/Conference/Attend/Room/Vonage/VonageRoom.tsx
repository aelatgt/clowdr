import { Box, Flex, useToast, VStack } from "@chakra-ui/react";
import * as R from "ramda";
import React, { useCallback, useMemo, useRef } from "react";
import useUserId from "../../../../Auth/useUserId";
import ChatProfileModalProvider from "../../../../Chat/Frame/ChatProfileModalProvider";
import { useOpenTok } from "../../../../Vonage/useOpenTok";
import useCurrentAttendee from "../../../useCurrentAttendee";
import PlaceholderImage from "../PlaceholderImage";
import { PreJoin } from "../PreJoin";
import { usePublisherControl } from "./usePublisherControl";
import { VonageOverlay } from "./VonageOverlay";
import { VonageRoomControlBar } from "./VonageRoomControlBar";
import { VonageSubscriber } from "./VonageSubscriber";

export function VonageRoom({
    vonageSessionId,
    getAccessToken,
}: {
    vonageSessionId: string;
    getAccessToken: () => Promise<string>;
}): JSX.Element {
    const [openTokProps, openTokMethods] = useOpenTok();
    const userId = useUserId();
    const attendee = useCurrentAttendee();
    const toast = useToast();
    const cameraPublishContainerRef = useRef<HTMLDivElement>(null);
    const screenPublishContainerRef = useRef<HTMLDivElement>(null);
    const cameraPreviewRef = useRef<HTMLVideoElement>(null);
    usePublisherControl(cameraPublishContainerRef, screenPublishContainerRef);

    const joinRoom = useCallback(async () => {
        console.log("Joining room");
        let accessToken;
        try {
            accessToken = await getAccessToken();
        } catch (e) {
            toast({
                status: "error",
                title: "Failed to join room",
                description: "Could not retrieve access token",
            });
            return;
        }

        try {
            await openTokMethods.initSessionAndConnect({
                apiKey: import.meta.env.SNOWPACK_PUBLIC_OPENTOK_API_KEY,
                sessionId: vonageSessionId,
                sessionOptions: {},
                token: accessToken,
            });
        } catch (e) {
            console.error("Failed to join room", e);
            toast({
                status: "error",
                description: "Cannot connect to room",
            });
        }
    }, [getAccessToken, openTokMethods, toast, vonageSessionId]);

    const leaveRoom = useCallback(() => {
        if (openTokProps.isSessionConnected) {
            openTokMethods.disconnectSession();
        }
    }, [openTokMethods, openTokProps.isSessionConnected]);

    const receivingScreenShare = useMemo(() => openTokProps.streams.find((s) => s.videoType === "screen"), [
        openTokProps.streams,
    ]);

    return (
        <ChatProfileModalProvider>
            <Box display="grid" gridTemplateRows="1fr auto">
                <Box display="none" ref={screenPublishContainerRef} />
                <Box display="none" ref={cameraPublishContainerRef} />
                <Box
                    maxH="80vh"
                    height={receivingScreenShare ? "70vh" : undefined}
                    overflowY="auto"
                    position="relative"
                >
                    <Flex width="100%" height="auto" flexWrap="wrap" overflowY="auto">
                        {openTokProps.isSessionConnected && !openTokProps.publisher["camera"] ? (
                            <Box position="relative" w={300} h={300}>
                                <Box
                                    position="absolute"
                                    left="0.4rem"
                                    bottom="0.2rem"
                                    zIndex="200"
                                    width="100%"
                                    overflow="hidden"
                                >
                                    <VonageOverlay connectionData={JSON.stringify({ attendeeId: attendee.id })} />
                                </Box>
                                <PlaceholderImage />
                            </Box>
                        ) : (
                            <></>
                        )}
                        {R.sortWith(
                            [
                                R.descend(
                                    (stream) => stream.streamId === openTokProps.publisher["camera"]?.stream?.streamId
                                ),
                                R.ascend(R.prop("creationTime")),
                            ],
                            openTokProps.streams
                        ).map((stream) => (
                            <Box key={stream.streamId} w={300} h={300}>
                                <VonageSubscriber stream={stream} />
                            </Box>
                        ))}
                        {openTokProps.connections
                            .filter(
                                (connection) =>
                                    userId &&
                                    !connection.data.includes(userId) &&
                                    !openTokProps.streams.find(
                                        (stream) => stream.connection.connectionId === connection.connectionId
                                    )
                            )
                            .map((connection) => (
                                <Box key={connection.connectionId} position="relative" w={300} h={300}>
                                    <Box
                                        position="absolute"
                                        left="0.4rem"
                                        bottom="0.2rem"
                                        zIndex="200"
                                        width="100%"
                                        overflow="hidden"
                                    >
                                        <VonageOverlay connectionData={connection.data} />
                                    </Box>
                                    <PlaceholderImage />
                                </Box>
                            ))}
                    </Flex>

                    <Box
                        position="absolute"
                        width="100%"
                        height="100%"
                        top="0"
                        left="0"
                        zIndex={300}
                        hidden={!receivingScreenShare}
                    >
                        {openTokProps.streams
                            .filter((stream) => stream.videoType === "screen")
                            .map((stream) => (
                                <VonageSubscriber key={stream.streamId} stream={stream} />
                            ))}
                    </Box>
                    {openTokProps.isSessionConnected ? (
                        <></>
                    ) : (
                        <VStack justifyContent="center" height="100%" width="100%">
                            <PreJoin cameraPreviewRef={cameraPreviewRef} />
                        </VStack>
                    )}
                </Box>
                <VonageRoomControlBar
                    onJoinRoom={joinRoom}
                    onLeaveRoom={leaveRoom}
                    inRoom={openTokProps.isSessionConnected}
                />
            </Box>
        </ChatProfileModalProvider>
    );
}