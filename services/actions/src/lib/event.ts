import { hasura } from "./hasura/hasuraMetadata";

export async function createEventStartTrigger(eventId: string, startTime: string): Promise<void> {
    const startTimeMillis = Date.parse(startTime);

    if (startTimeMillis < new Date().getTime()) {
        console.log("Start time of event is in the past, skipping.", eventId, startTime);
        return;
    }
    console.log("Creating new start time trigger for event", eventId, startTime);
    await hasura.createScheduledEvent({
        schedule_at: new Date(startTimeMillis - 70000).toISOString(),
        webhook: "{{ACTION_BASE_URL}}/event/notifyStart",
        comment: `Event ${eventId} starts at ${startTime}`,
        headers: [{ name: "x-hasura-event-secret", value_from_env: "EVENT_SECRET" }],
        payload: {
            eventId,
            startTime,
        },
    });
}

export async function createEventEndTrigger(eventId: string, endTime: string): Promise<void> {
    const endTimeMillis = Date.parse(endTime);

    if (endTimeMillis < new Date().getTime()) {
        console.log("End time of event is in the past, skipping.", eventId, endTime);
        return;
    }
    console.log("Creating new end time trigger for event", eventId, endTime);
    await hasura.createScheduledEvent({
        schedule_at: new Date(endTimeMillis - 70000).toISOString(),
        webhook: "{{ACTION_BASE_URL}}/event/notifyEnd",
        comment: `Event ${eventId} ends at ${endTime}`,
        headers: [{ name: "x-hasura-event-secret", value_from_env: "EVENT_SECRET" }],
        payload: {
            eventId,
            endTime,
        },
    });
}
