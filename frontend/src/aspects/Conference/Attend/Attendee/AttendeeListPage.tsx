import { gql } from "@apollo/client";
import {
    Button,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Spinner,
    Text,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchAttendeesLazyQuery, useSelectAttendeesQuery } from "../../../../generated/graphql";
import useQueryErrorToast from "../../../GQL/useQueryErrorToast";
import FAIcon from "../../../Icons/FAIcon";
import { useNoPrimaryMenuButtons } from "../../../Menu/usePrimaryMenuButtons";
import { useTitle } from "../../../Utils/useTitle";
import { useConference } from "../../useConference";
import type { Attendee } from "../../useCurrentAttendee";
import AttendeesList from "./AttendeesList";

gql`
    query SelectAttendees($conferenceId: uuid!) {
        Attendee(where: { conferenceId: { _eq: $conferenceId } }, order_by: { displayName: asc }) {
            ...AttendeeData
        }
    }

    query SearchAttendees($conferenceId: uuid!, $search: String!) {
        Attendee(
            where: {
                _and: [
                    { conferenceId: { _eq: $conferenceId } }
                    {
                        _or: [
                            { displayName: { _ilike: $search } }
                            { profile: { _or: [{ affiliation: { _ilike: $search } }, { bio: { _ilike: $search } }] } }
                        ]
                    }
                ]
            }
            order_by: { displayName: asc }
        ) {
            ...AttendeeData
        }
    }
`;

export default function AttendeeListPage(): JSX.Element {
    const [search, setSearch] = useState<string>("");

    const conference = useConference();
    const title = useTitle(`Attendees at ${conference.shortName}`);

    useNoPrimaryMenuButtons();

    const [
        searchQuery,
        { loading: loadingSearch, error: errorSearch, data: dataSearch },
    ] = useSearchAttendeesLazyQuery();
    useQueryErrorToast(errorSearch, false, "AttendeeListPage.tsx -- search");

    const { loading: loadingAttendees, error: errorAttendees, data: dataAttendees } = useSelectAttendeesQuery({
        variables: {
            conferenceId: conference.id,
        },
    });
    useQueryErrorToast(errorAttendees, false, "AttendeeListPage.tsx -- attendees");

    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
    const [loadedCount, setLoadedCount] = useState<number>(30);

    const allAttendees = useMemo(() => {
        if ((loadingAttendees && !dataAttendees) || errorAttendees) {
            return undefined;
        }

        if (!dataAttendees) {
            return [];
        }

        return dataAttendees?.Attendee.filter((x) => !!x.profile && !!x.userId) as Attendee[];
    }, [dataAttendees, errorAttendees, loadingAttendees]);

    const [attendees, setAttendees] = useState<Attendee[] | null>(null);
    const [searched, setSearched] = useState<Attendee[] | null>(null);
    const [allSearched, setAllSearched] = useState<Attendee[] | null>(null);

    useEffect(() => {
        setAttendees(allAttendees?.slice(0, loadedCount) ?? null);
        setIsLoadingMore(false);
    }, [allAttendees, loadedCount]);

    useEffect(() => {
        setSearched(allSearched?.slice(0, loadedCount) ?? null);
        setIsLoadingMore(false);
    }, [allSearched, loadedCount]);

    useEffect(() => {
        function doSearch() {
            if ((loadingSearch && !dataSearch) || errorSearch) {
                return undefined;
            }

            if (!dataSearch) {
                return undefined;
            }

            return dataSearch?.Attendee.filter((x) => !!x.profile && !!x.userId) as Attendee[];
        }

        setLoadedCount(30);
        setAllSearched((oldSearched) => doSearch() ?? oldSearched ?? null);
        // We need `search` in the sensitivity list because Apollo cache may not
        // change the data/error/loading state if the result comes straight from
        // the cache of the last run the search query
    }, [dataSearch, errorSearch, loadingSearch, search]);

    useEffect(() => {
        const tId = setTimeout(() => {
            if (search.length >= 3) {
                searchQuery({
                    variables: {
                        conferenceId: conference.id,
                        search: `%${search}%`,
                    },
                });
            } else {
                setAllSearched(null);
            }
        }, 750);
        return () => {
            clearTimeout(tId);
        };
    }, [conference.id, search, searchQuery]);

    return (
        <>
            {title}
            <Heading as="h1">Attendees</Heading>
            <FormControl maxW={400}>
                <InputGroup>
                    <InputLeftAddon as="label" id="attendees-search">
                        Search
                    </InputLeftAddon>
                    <Input
                        aria-labelledby="attendees-search"
                        value={search}
                        onChange={(ev) => setSearch(ev.target.value)}
                        placeholder="Type to search"
                    />
                    <InputRightElement>
                        {loadingSearch ? <Spinner /> : <FAIcon iconStyle="s" icon="search" />}
                    </InputRightElement>
                </InputGroup>
                <FormHelperText>Search names, affiliations and bios. (Min length 3)</FormHelperText>
            </FormControl>
            <AttendeesList
                allAttendees={attendees ?? undefined}
                searchedAttendees={searched && search.length > 0 ? searched : undefined}
            />
            {allAttendees && loadedCount < allAttendees.length ? (
                <Button
                    isLoading={isLoadingMore}
                    onClick={() => {
                        setIsLoadingMore(true);
                        setLoadedCount(loadedCount + 30);
                    }}
                >
                    <FAIcon iconStyle="s" icon="chevron-down" mr={2} />
                    Load more
                </Button>
            ) : (
                <Text fontStyle="italic">(End of list)</Text>
            )}
        </>
    );
}
