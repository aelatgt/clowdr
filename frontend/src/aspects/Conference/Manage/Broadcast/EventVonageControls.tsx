import { gql } from "@apollo/client";
import { Button, FormControl, FormLabel, Select, useToast } from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import React, { useMemo } from "react";
import {
    useEventVonageControls_GetEventsQuery,
    useEventVonageControls_StopEventBroadcastMutation,
} from "../../../../generated/graphql";

gql`
    query EventVonageControls_GetEvents($conferenceId: uuid!) {
        Event(where: { conferenceId: { _eq: $conferenceId }, intendedRoomModeName: { _in: [Q_AND_A, PRESENTATION] } }) {
            id
            name
            contentGroup {
                id
                title
            }
        }
    }
    mutation EventVonageControls_StopEventBroadcast($eventId: uuid!) {
        stopEventBroadcast(eventId: $eventId) {
            broadcastsStopped
        }
    }
`;

export function EventVonageControls({ conferenceId }: { conferenceId: string }): JSX.Element {
    const { data } = useEventVonageControls_GetEventsQuery({
        variables: {
            conferenceId,
        },
    });

    const [stopEventBroadcastMutation] = useEventVonageControls_StopEventBroadcastMutation();

    const toast = useToast();

    const options = useMemo(() => {
        return data?.Event.map(
            (event) =>
                (
                    <option key={event.id} value={event.id}>
                        {event.contentGroup ? `${event.contentGroup.title} (${event.name})` : event.name}
                    </option>
                ) ?? []
        );
    }, [data?.Event]);

    return (
        <Formik<{ eventId: string | null }>
            initialValues={{ eventId: null }}
            onSubmit={async (values) => {
                try {
                    if (!values.eventId) {
                        throw new Error("No event selected");
                    }
                    const result = await stopEventBroadcastMutation({
                        variables: {
                            eventId: values.eventId,
                        },
                    });

                    if (result.data?.stopEventBroadcast) {
                        toast({
                            status: "success",
                            title: `Stopped ${result.data.stopEventBroadcast.broadcastsStopped} broadcasts`,
                        });
                    } else {
                        throw new Error("No response from server");
                    }
                } catch (e) {
                    toast({
                        status: "error",
                        title: "Failed to stop broadcasts",
                        description: e.toString(),
                    });
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field name="eventId">
                        {({ field, form }: FieldProps<string>) => (
                            <FormControl isInvalid={!!form.errors.eventId && !!form.touched.eventId} isRequired>
                                <FormLabel htmlFor="eventId">Event</FormLabel>
                                <Select {...field} id="eventId" placeholder="Choose event">
                                    {options}
                                </Select>
                            </FormControl>
                        )}
                    </Field>
                    <Button type="submit" isLoading={isSubmitting} mt={4}>
                        Stop any ongoing broadcasts
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
