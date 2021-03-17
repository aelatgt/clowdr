import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import {
    GetRoomMembersDocument,
    GetRoomMembersQuery,
    GetRoomMembersQueryVariables,
    RoomMemberFragment,
    RoomMemberFragmentDoc,
    RoomPersonRole_Enum,
    useAddParticipantToRoomMutation,
} from "../../../../generated/graphql";
import useRoomMembers from "../../../Room/useRoomMembers";
import { maybeCompare } from "../../../Utils/maybeSort";
import { AttendeeSearch } from "./AttendeeSearch";

export function AddRoomPersonModal({
    roomId,
    isOpen,
    onClose,
}: {
    roomId: string;
    isOpen: boolean;
    onClose: () => void;
}): JSX.Element {
    const [addParticipantToRoomMutation] = useAddParticipantToRoomMutation();
    const members = useRoomMembers();

    const selectedAttendeeIds = useMemo(
        () =>
            members
                ? members
                      .sort((x, y) =>
                          maybeCompare(x.attendee, y.attendee, (a, b) => a.displayName.localeCompare(b.displayName))
                      )
                      .map((person) => person.member.attendeeId)
                : [],
        [members]
    );

    const addMember = useCallback(
        async (attendeeId: string) => {
            await addParticipantToRoomMutation({
                variables: {
                    attendeeId,
                    roomId,
                },
                update: (cache, result) => {
                    if (result.data?.insert_RoomPerson_one) {
                        const data: RoomMemberFragment = {
                            __typename: "RoomPerson",
                            id: result.data.insert_RoomPerson_one.id,
                            attendeeId,
                            roomPersonRoleName: RoomPersonRole_Enum.Participant,
                            roomId,
                        };

                        cache.writeFragment<RoomMemberFragment>({
                            data,
                            fragment: RoomMemberFragmentDoc,
                            fragmentName: "RoomMember",
                            broadcast: true,
                        });

                        const query = cache.readQuery<GetRoomMembersQuery, GetRoomMembersQueryVariables>({
                            query: GetRoomMembersDocument,
                            variables: {
                                roomId,
                            },
                        });

                        if (query) {
                            cache.writeQuery<GetRoomMembersQuery, GetRoomMembersQueryVariables>({
                                query: GetRoomMembersDocument,
                                variables: {
                                    roomId,
                                },
                                broadcast: true,
                                data: {
                                    __typename: query.__typename,
                                    RoomPerson: [...query.RoomPerson, data],
                                },
                            });
                        }
                    }
                },
            });
        },
        [addParticipantToRoomMutation, roomId]
    );

    return (
        <Modal scrollBehavior="outside" onClose={onClose} isOpen={isOpen} motionPreset="scale">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader pb={0}>Add person to room</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <AttendeeSearch selectedAttendeeIds={selectedAttendeeIds} onSelect={addMember} />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
