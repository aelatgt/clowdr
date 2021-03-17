import { useApolloClient } from "@apollo/client";
import React, { useEffect, useMemo } from "react";
import { useConference } from "../Conference/useConference";
import { useMaybeCurrentAttendee } from "../Conference/useCurrentAttendee";
import { GlobalChatState } from "./ChatGlobalState";

export const GlobalChatStateContext = React.createContext<GlobalChatState | undefined>(undefined);

export function useGlobalChatState(): GlobalChatState {
    const ctx = React.useContext(GlobalChatStateContext);
    if (!ctx) {
        throw new Error("Context not available - are you outside the provider?");
    }
    return ctx;
}

export function GlobalChatStateProvider({
    children,
}: {
    children: string | JSX.Element | Array<JSX.Element>;
}): JSX.Element {
    const conference = useConference();
    const attendee = useMaybeCurrentAttendee();
    const client = useApolloClient();
    const state = useMemo(() => (attendee ? new GlobalChatState(conference, attendee, client) : undefined), [
        attendee,
        conference,
        client,
    ]);

    useEffect(() => {
        state?.init();

        return () => {
            state?.teardown();
        };
    }, [state]);

    return <GlobalChatStateContext.Provider value={state}>{children}</GlobalChatStateContext.Provider>;
}
