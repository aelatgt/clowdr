import { gql } from "@apollo/client";
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    HStack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useToast,
    VStack,
} from "@chakra-ui/react";
import type { IntermediaryAttendeeData } from "@clowdr-app/shared-types/build/import/intermediary";
import assert from "assert";
import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    GroupAttendee_Insert_Input,
    useImportAttendeesMutation,
    useSelectAllAttendeesQuery,
    useSelectAllGroupsQuery,
} from "../../../../../generated/graphql";
import { LinkButton } from "../../../../Chakra/LinkButton";
import useQueryErrorToast from "../../../../GQL/useQueryErrorToast";
import { useConference } from "../../../useConference";

gql`
    mutation ImportAttendees(
        $insertAttendees: [Attendee_insert_input!]!
        $insertInvitations: [Invitation_insert_input!]!
        $insertGroupAttendees: [GroupAttendee_insert_input!]!
    ) {
        insert_Attendee(objects: $insertAttendees) {
            affected_rows
        }
        insert_Invitation(objects: $insertInvitations) {
            affected_rows
        }
        insert_GroupAttendee(objects: $insertGroupAttendees) {
            affected_rows
        }
    }
`;

interface AttendeeFinalData {
    id: string;
    name: string;
    email: string;
    group:
        | undefined
        | {
              id: string;
              name: string;
          };
    isNew: boolean;
}

export default function ImportPanel({
    data: inputData,
}: {
    data: Record<string, IntermediaryAttendeeData[]>;
}): JSX.Element {
    const conference = useConference();
    const [hasImported, setHasImported] = useState<boolean>(false);

    const { loading: groupsLoading, data: groupsData, error: groupsError } = useSelectAllGroupsQuery({
        variables: {
            conferenceId: conference.id,
        },
    });
    useQueryErrorToast(groupsError, false);

    const {
        loading: attendeesLoading,
        data: attendeesData,
        error: attendeesError,
        refetch: refetchAttendees,
    } = useSelectAllAttendeesQuery({
        fetchPolicy: "network-only",
        variables: {
            conferenceId: conference.id,
        },
    });
    useQueryErrorToast(attendeesError, false);

    const [
        importMutation,
        { loading: importLoading, error: importError, data: importData },
    ] = useImportAttendeesMutation();
    useQueryErrorToast(importError, false);

    const toast = useToast();
    useEffect(() => {
        if (importData?.insert_Attendee) {
            toast({
                title: `Imported ${importData.insert_Attendee.affected_rows / 2} people`,
                status: "success",
                duration: 3000,
                position: "bottom",
            });
            refetchAttendees();
        }
    }, [importData?.insert_Attendee, refetchAttendees, toast]);

    const finalData = useMemo(() => {
        const firstPass = Object.values(inputData).reduce(
            (acc, input) => [
                ...acc,
                ...input
                    .map((row) => ({
                        ...row,
                        name: row.name.trim(),
                        email: row.email.trim().toLowerCase(),
                    }))
                    // Remove duplicates as compared to the existing data
                    .reduce<AttendeeFinalData[]>((acc, row) => {
                        const group = groupsData?.Group.find((g) => g.name.toLowerCase() === row.group.toLowerCase());
                        if (!group) {
                            return acc;
                        }

                        const existingAttendee =
                            attendeesData?.Attendee &&
                            attendeesData.Attendee.find((x) => {
                                return x.invitation && x.invitation.invitedEmailAddress === row.email;
                            });

                        if (existingAttendee) {
                            if (!existingAttendee.groupAttendees.some((ga) => ga.groupId === group.id)) {
                                return [
                                    ...acc,
                                    {
                                        name: row.name,
                                        email: row.email,
                                        id: existingAttendee.id,
                                        group,
                                        isNew: false,
                                    },
                                ];
                            } else {
                                return acc;
                            }
                        } else {
                            return [
                                ...acc,
                                {
                                    name: row.name,
                                    email: row.email,
                                    id: uuidv4(),
                                    group,
                                    isNew: true,
                                },
                            ];
                        }
                    }, []),
            ],
            [] as AttendeeFinalData[]
        );

        // Remove duplicates as compared to the provided data
        return firstPass.filter(
            (row1, index1) => !firstPass.some((row2, index2) => index2 < index1 && row2.email === row1.email)
        );
    }, [attendeesData?.Attendee, groupsData?.Group, inputData]);

    const noGroup = finalData.some((x) => !x.group);
    const noEmail = finalData.some((x) => x.email.length === 0);
    const noName = finalData.some((x) => x.name.length === 0);

    const totalInputLength = useMemo(() => Object.values(inputData).reduce((acc, rows) => acc + rows.length, 0), [
        inputData,
    ]);

    return (
        <VStack alignItems="flex-start" spacing={8}>
            <Alert
                status="info"
                variant="top-accent"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                minH="150px"
            >
                <HStack>
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle fontSize="lg">Please check over the data below, then click Import</AlertTitle>
                </HStack>
                <AlertDescription mt={4} mb={1}>
                    <Text as="b">This does NOT send invitation emails to attendees.</Text>
                    <Text>
                        All this does is import the list into the system - after importing, you will need to go to
                        Manage People to send invitations.
                    </Text>
                </AlertDescription>
            </Alert>
            <HStack>
                <Button
                    colorScheme="green"
                    isDisabled={!!groupsError || !!attendeesError || noName || noEmail || noGroup}
                    isLoading={groupsLoading || importLoading || attendeesLoading}
                    onClick={() => {
                        const newAttendees = finalData.filter((x) => x.isNew);
                        const newGroupAttendees: GroupAttendee_Insert_Input[] = finalData
                            .filter((x) => !x.isNew)
                            .map((x) => ({
                                attendeeId: x.id,
                                groupId: x.group?.id,
                            }));

                        importMutation({
                            variables: {
                                insertAttendees: newAttendees.map((x) => {
                                    assert(x.group);
                                    return {
                                        id: x.id,
                                        conferenceId: conference.id,
                                        displayName: x.name,
                                        groupAttendees: {
                                            data: [
                                                {
                                                    groupId: x.group.id,
                                                },
                                            ],
                                        },
                                    };
                                }),
                                insertInvitations: newAttendees.map((x) => ({
                                    attendeeId: x.id,
                                    invitedEmailAddress: x.email,
                                })),
                                insertGroupAttendees: newGroupAttendees,
                            },
                        });
                        setHasImported(true);
                    }}
                >
                    Import
                </Button>
                <LinkButton
                    to={`/conference/${conference.slug}/manage/people`}
                    colorScheme="red"
                    isDisabled={!!finalData?.length && (!hasImported || importLoading)}
                >
                    Go to Manage People
                </LinkButton>
            </HStack>
            {noName ? (
                <Alert
                    status="error"
                    variant="top-accent"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                >
                    <AlertIcon />
                    <AlertTitle>Error: One or more rows has no &lsquot;name&rsquot; value</AlertTitle>
                </Alert>
            ) : undefined}
            {noEmail ? (
                <Alert
                    status="error"
                    variant="top-accent"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                >
                    <AlertIcon />
                    <AlertTitle>Error: One or more rows has no &lsquot;email&rsquot; value</AlertTitle>
                </Alert>
            ) : undefined}
            {noGroup && !groupsLoading ? (
                <Alert
                    status="error"
                    variant="top-accent"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                >
                    <AlertIcon />
                    <AlertTitle>Error: One or more rows has an invalid group</AlertTitle>
                    <AlertDescription>
                        <VStack alignItems="flex-start">
                            <Text>Make sure you created any groups you want to target before importing attendees.</Text>
                            <LinkButton to={`/conference/${conference.slug}/manage/groups`} colorScheme="red">
                                Go to Manage Groups
                            </LinkButton>
                        </VStack>
                    </AlertDescription>
                </Alert>
            ) : undefined}
            {finalData.length < totalInputLength ? (
                <Alert>
                    <AlertIcon />
                    <AlertTitle>
                        Your selected data has been de-duplicated against existing Clowdr data based on email address.
                    </AlertTitle>
                </Alert>
            ) : undefined}
            <Box overflowX="auto" maxW="100%" w="100%">
                <Table colorScheme="blue" variant="striped">
                    <Thead>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Group</Th>
                    </Thead>
                    <Tbody>
                        {finalData
                            .sort((x, y) => x.name.localeCompare(y.name))
                            .map((x) => (
                                <Tr key={x.id}>
                                    <Td>{x.name}</Td>
                                    <Td>{x.email}</Td>
                                    <Td>{x.group?.name}</Td>
                                </Tr>
                            ))}
                        {finalData.length === 0 ? (
                            <Tr>
                                <Td>No new data to import</Td>
                                <Td></Td>
                                <Td></Td>
                            </Tr>
                        ) : undefined}
                    </Tbody>
                </Table>
            </Box>
        </VStack>
    );
}
