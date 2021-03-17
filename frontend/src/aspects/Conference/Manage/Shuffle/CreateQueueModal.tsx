import { gql } from "@apollo/client";
import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Tooltip,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import {
    ManageShufflePeriods_SelectAllDocument,
    ManageShufflePeriods_SelectAllQuery,
    ManageShufflePeriods_SelectAllQueryVariables,
    ManageShufflePeriods_ShufflePeriodFragment,
    ManageShufflePeriods_ShufflePeriodFragmentDoc,
    Room_ShuffleAlgorithm_Enum,
    useInsertShufflePeriodMutation,
} from "../../../../generated/graphql";
import { DateTimePicker } from "../../../CRUDTable/DateTimePicker";
import { roundUpToNearest } from "../../../Generic/MathUtils";
import { useConference } from "../../useConference";
import useCurrentAttendee from "../../useCurrentAttendee";

gql`
    mutation InsertShufflePeriod($object: room_ShufflePeriod_insert_input!) {
        insert_room_ShufflePeriod_one(object: $object) {
            id
            created_at
            updated_at
            conferenceId
            startAt
            endAt
            roomDurationMinutes
            targetAttendeesPerRoom
            maxAttendeesPerRoom
            waitRoomMaxDurationSeconds
            name
            organiserId
            algorithm
        }
    }
`;

export default function CreateQueueModal(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const conference = useConference();
    const attendee = useCurrentAttendee();

    const [insert, insertResponse] = useInsertShufflePeriodMutation({
        update: (cache, result) => {
            if (result.data?.insert_room_ShufflePeriod_one) {
                const data = result.data.insert_room_ShufflePeriod_one;
                const newData: ManageShufflePeriods_ShufflePeriodFragment = {
                    ...data,
                    __typename: "room_ShufflePeriod",
                    completedEntries: {
                        aggregate: {
                            count: 0,
                        },
                    },
                    ongoingEntries: {
                        aggregate: {
                            count: 0,
                        },
                    },
                    waitingEntries: {
                        aggregate: {
                            count: 0,
                        },
                    },
                };
                cache.writeFragment<ManageShufflePeriods_ShufflePeriodFragment>({
                    data: newData,
                    fragment: ManageShufflePeriods_ShufflePeriodFragmentDoc,
                    broadcast: true,
                    fragmentName: "ManageShufflePeriods_ShufflePeriod",
                });

                const q = cache.readQuery<
                    ManageShufflePeriods_SelectAllQuery,
                    ManageShufflePeriods_SelectAllQueryVariables
                >({
                    query: ManageShufflePeriods_SelectAllDocument,
                    variables: {
                        conferenceId: conference.id,
                    },
                });

                if (q) {
                    cache.writeQuery<ManageShufflePeriods_SelectAllQuery, ManageShufflePeriods_SelectAllQueryVariables>(
                        {
                            query: ManageShufflePeriods_SelectAllDocument,
                            data: {
                                ...q,
                                room_ShufflePeriod: [...q.room_ShufflePeriod, newData],
                            },
                            variables: {
                                conferenceId: conference.id,
                            },
                        }
                    );
                }
            }
        },
    });

    const [name, setName] = useState<string>("");
    const [algorithm, setAlgorithm] = useState<Room_ShuffleAlgorithm_Enum>(Room_ShuffleAlgorithm_Enum.Fcfs);
    const [startAt, setStartAt] = useState<Date>(new Date(roundUpToNearest(Date.now(), 5 * 60 * 1000)));
    const [endAt, setEndAt] = useState<Date>(new Date(startAt.getTime() + 30 * 60 * 1000));
    const [roomDurationMinutes, setRoomDurationMinutes] = useState<number>(6);
    const [targetAttendees, setTargetAttendees] = useState<number>(3);
    const [maxAttendees, setMaxAttendees] = useState<number>(5);
    const [maxWait, setMaxWait] = useState<number>(90);

    const onStartAtChange = useCallback(
        (v: Date | undefined) => {
            if (v) {
                setStartAt(v);
                if (v.getTime() > endAt.getTime() - 5 * 60 * 1000) {
                    setEndAt(new Date(v.getTime() + 5 * 60 * 1000));
                }
            }
        },
        [endAt]
    );
    const onEndAtChange = useCallback(
        (v: Date | undefined) => {
            if (v && v.getTime() >= startAt.getTime() + 5 * 60 * 1000) {
                setEndAt(v);
            }
        },
        [startAt]
    );
    const onDurationChange = useCallback((_valStr: string, valueAsNumber: number) => {
        const v = Math.round(valueAsNumber);
        if (v >= 2 && v <= 2 * 60) {
            setRoomDurationMinutes(v);
        }
    }, []);
    const onTargetAttendeesChange = useCallback(
        (_valStr: string, valueAsNumber: number) => {
            const v = Math.round(valueAsNumber);
            if (v >= 2) {
                setTargetAttendees(v);
                if (maxAttendees < v) {
                    setMaxAttendees(v + 1);
                }
            }
        },
        [maxAttendees]
    );
    const onMaxAttendeesChange = useCallback(
        (_valStr: string, valueAsNumber: number) => {
            const v = Math.round(valueAsNumber);
            if (v >= targetAttendees) {
                setMaxAttendees(v);
            }
        },
        [targetAttendees]
    );
    const onMaxWaitChange = useCallback((_valStr: string, valueAsNumber: number) => {
        const v = Math.round(valueAsNumber);
        if (v >= 60 && v <= 300) {
            setMaxWait(v);
        }
    }, []);

    const reset = useCallback(() => {
        setName("");
        setAlgorithm(Room_ShuffleAlgorithm_Enum.Fcfs);
        const startAt = new Date(roundUpToNearest(Date.now(), 5 * 60 * 1000));
        setStartAt(startAt);
        setEndAt(new Date(startAt.getTime() + 30 * 60 * 1000));
        setRoomDurationMinutes(6);
        setTargetAttendees(3);
        setMaxAttendees(5);
        setMaxWait(90);
    }, []);

    const toast = useToast();
    const onCreate = useCallback(async () => {
        try {
            await insert({
                variables: {
                    object: {
                        name,
                        algorithm,
                        conferenceId: conference.id,
                        endAt: endAt.toISOString(),
                        maxAttendeesPerRoom: maxAttendees,
                        roomDurationMinutes,
                        startAt: startAt.toISOString(),
                        targetAttendeesPerRoom: targetAttendees,
                        waitRoomMaxDurationSeconds: maxWait,
                        organiserId: attendee.id,
                    },
                },
            });

            reset();
            onClose();
        } catch (e) {
            toast({
                description: e.message ?? e.toString(),
                duration: 12000,
                isClosable: true,
                position: "bottom",
                status: "error",
                title: "Error! Could not create queue",
            });
        }
    }, [
        algorithm,
        attendee.id,
        conference.id,
        endAt,
        insert,
        maxAttendees,
        maxWait,
        name,
        onClose,
        reset,
        roomDurationMinutes,
        startAt,
        targetAttendees,
        toast,
    ]);

    return (
        <>
            <Button colorScheme="green" mb={2} onClick={onOpen}>
                New queue
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create shuffle queue</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    isDisabled={insertResponse.loading}
                                    min={1}
                                    value={name}
                                    onChange={(ev) => setName(ev.target.value)}
                                />
                                <FormHelperText>
                                    Name of the queue, shown to attendees. For example, a topic or theme.
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Automation</FormLabel>
                                <Select
                                    isDisabled={insertResponse.loading}
                                    value={algorithm}
                                    onChange={(ev) =>
                                        setAlgorithm(ev.target.selectedOptions[0].value as Room_ShuffleAlgorithm_Enum)
                                    }
                                >
                                    <option value={Room_ShuffleAlgorithm_Enum.None}>None</option>
                                    <option value={Room_ShuffleAlgorithm_Enum.FcfsFixedRooms}>
                                        First-come, first-served, fixed rooms
                                    </option>
                                    <option value={Room_ShuffleAlgorithm_Enum.Fcfs}>
                                        First-come, first-served, auto-create rooms
                                    </option>
                                </Select>
                                <FormHelperText>
                                    Automation allocates people to rooms and creates new rooms when needed. You can also
                                    manually configure rooms and allocations and let the algorithm handle the rest, or
                                    have no automation and do it all yourself.
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Start at</FormLabel>
                                <DateTimePicker
                                    isDisabled={insertResponse.loading}
                                    value={startAt}
                                    onChange={onStartAtChange}
                                />
                                <FormHelperText>
                                    Start time of the queue. Attendees can join the queue up to 5 mins in advance but
                                    automatic allocation only starts at this time.
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel>End at</FormLabel>
                                <DateTimePicker
                                    isDisabled={insertResponse.loading}
                                    value={endAt}
                                    onChange={onEndAtChange}
                                />
                                <FormHelperText>
                                    End time of the queue. New rooms won&apos;t be generated after this time but any
                                    ongoing rooms will run to completion.
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Room duration in minutes</FormLabel>
                                <NumberInput
                                    isDisabled={insertResponse.loading}
                                    min={2}
                                    max={2 * 60}
                                    value={roomDurationMinutes}
                                    onChange={onDurationChange}
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                <FormHelperText>
                                    Each room generated by the queue runs for exactly this duration. When time runs out,
                                    attendees are returned to the waiting page where they can choose to rejoin the queue
                                    for a new room.
                                </FormHelperText>
                            </FormControl>
                            {algorithm === Room_ShuffleAlgorithm_Enum.Fcfs ||
                            algorithm === Room_ShuffleAlgorithm_Enum.FcfsFixedRooms ? (
                                <>
                                    <FormControl>
                                        <FormLabel>Target attendees per room</FormLabel>
                                        <NumberInput
                                            isDisabled={insertResponse.loading}
                                            min={2}
                                            value={targetAttendees}
                                            onChange={onTargetAttendeesChange}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <FormHelperText>
                                            The target number of attendees per room, typically 3 to 5 works well.
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Maximum attendees per room</FormLabel>
                                        <NumberInput
                                            isDisabled={insertResponse.loading}
                                            min={2}
                                            value={maxAttendees}
                                            onChange={onMaxAttendeesChange}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <FormHelperText>
                                            The maximum number of attendees per room, typically up to 8 works well.
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Maximum wait time in seconds</FormLabel>
                                        <NumberInput
                                            isDisabled={insertResponse.loading}
                                            min={60}
                                            max={300}
                                            value={maxWait}
                                            onChange={onMaxWaitChange}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <FormHelperText>
                                            When existing rooms reach their Target number of attendees, new queuers wait
                                            for others to form a new room. This field defines the maximum wait time. If
                                            someone waits longer than this, the algorithm attempts to find an existing
                                            room with less than the maximum number of attendees.
                                        </FormHelperText>
                                    </FormControl>
                                </>
                            ) : undefined}
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup>
                            <Button isDisabled={insertResponse.loading} onClick={onClose}>
                                Cancel
                            </Button>
                            <Tooltip label={name.length === 0 ? "Name is required" : undefined}>
                                <Box>
                                    <Button
                                        isLoading={insertResponse.loading}
                                        isDisabled={insertResponse.loading || name.length === 0}
                                        onClick={onCreate}
                                        colorScheme="green"
                                    >
                                        Create
                                    </Button>
                                </Box>
                            </Tooltip>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
