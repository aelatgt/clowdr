import { Center, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Permission_Enum, RoomMode_Enum, Timeline_RoomFragment } from "../../../../generated/graphql";
import FAIcon from "../../../Icons/FAIcon";
import { useConference } from "../../useConference";
import { useConferenceCurrentUserActivePermissions } from "../../useConferenceCurrentUserActivePermissions";

export default function RoomNameBox({
    room,
    width,
    showBottomBorder,
    borderColour,
    backgroundColor,
    marginLeft,
}: {
    room: Timeline_RoomFragment | string;
    width: number | string;
    showBottomBorder: boolean;
    borderColour: string;
    backgroundColor?: string;
    marginLeft?: string;
}): JSX.Element {
    const conference = useConference();
    const activePermissions = useConferenceCurrentUserActivePermissions();
    let roomIcon: JSX.Element | undefined;
    if (typeof room !== "string") {
        switch (room.currentModeName) {
            case RoomMode_Enum.Zoom:
            case RoomMode_Enum.Breakout:
                roomIcon = <FAIcon iconStyle="s" icon="users" />;
                break;
            case RoomMode_Enum.Prerecorded:
                roomIcon = <FAIcon iconStyle="s" icon="film" />;
                break;
            case RoomMode_Enum.Presentation:
                roomIcon = <FAIcon iconStyle="s" icon="chalkboard-teacher" />;
                break;
            case RoomMode_Enum.QAndA:
                roomIcon = <FAIcon iconStyle="s" icon="comments" />;
                break;
        }
    }

    const shouldLink = [
        Permission_Enum.ConferenceViewAttendees,
        Permission_Enum.ConferenceManageSchedule,
    ].some((permission) => activePermissions.has(permission));

    return (
        <Center
            p={4}
            w={width + "px"}
            borderBottomWidth={1}
            borderBottomStyle="solid"
            borderBottomColor={borderColour}
            borderRightWidth={showBottomBorder ? 1 : 0}
            borderRightStyle="solid"
            borderRightColor={borderColour}
            justifyContent="flex-start"
            backgroundColor={backgroundColor}
            role={typeof room === "string" ? "none" : "listitem"}
            ml={marginLeft}
            borderLeftWidth={marginLeft ? 1 : 0}
            borderLeftStyle="solid"
            borderLeftColor={borderColour}
        >
            {typeof room === "string" ? (
                room
            ) : shouldLink ? (
                <Link
                    as={ReactLink}
                    to={`/conference/${conference.slug}/room/${room.id}`}
                    textDecoration="none"
                    aria-label={`${room.name} room`}
                >
                    <HStack>
                        {roomIcon}
                        <Text>{room.name}</Text>
                    </HStack>
                </Link>
            ) : (
                <HStack aria-label={`${room.name} room`}>
                    {roomIcon}
                    <Text>{room.name}</Text>
                </HStack>
            )}
        </Center>
    );
}
