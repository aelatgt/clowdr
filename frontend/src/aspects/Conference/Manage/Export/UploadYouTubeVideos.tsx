import { gql } from "@apollo/client";
import {
    Box,
    Button,
    Code,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    List,
    ListIcon,
    ListItem,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Select,
    Spinner,
    Text,
    Textarea,
    Tooltip,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { isYouTubeDataBlob, YouTubeDataBlob } from "@clowdr-app/shared-types/build/attendeeGoogleAccount";
import { ContentBaseType, ContentItemDataBlob, isContentItemDataBlob } from "@clowdr-app/shared-types/build/content";
import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import Mustache from "mustache";
import * as R from "ramda";
import React, { useCallback, useMemo, useState } from "react";
import {
    JobStatus_Enum,
    Job_Queues_UploadYouTubeVideoJob_Insert_Input,
    UploadYouTubeVideos_UploadYouTubeVideoJobFragment,
    useUploadYouTubeVideos_CreateUploadYouTubeVideoJobsMutation,
    useUploadYouTubeVideos_GetAttendeeGoogleAccountsQuery,
    useUploadYouTubeVideos_GetContentItemsQuery,
    useUploadYouTubeVideos_GetTemplateDataQuery,
    useUploadYouTubeVideos_GetUploadYouTubeVideoJobsQuery,
    useUploadYouTubeVideos_RefreshYouTubeDataMutation,
} from "../../../../generated/graphql";
import { useRestorableState } from "../../../Generic/useRestorableState";
import ApolloQueryWrapper from "../../../GQL/ApolloQueryWrapper";
import { FAIcon } from "../../../Icons/FAIcon";
import { useConference } from "../../useConference";
import useCurrentAttendee from "../../useCurrentAttendee";
import { ChooseContentItemByTagModal } from "./ChooseContentItemByTagModal";
import { ChooseContentItemModal } from "./ChooseContentItemModal";

gql`
    query UploadYouTubeVideos_GetUploadYouTubeVideoJobs($conferenceId: uuid!) {
        job_queues_UploadYouTubeVideoJob(
            where: { conferenceId: { _eq: $conferenceId }, jobStatusName: { _neq: COMPLETED } }
            order_by: { createdAt: desc }
        ) {
            ...UploadYouTubeVideos_UploadYouTubeVideoJob
        }
    }

    fragment UploadYouTubeVideos_UploadYouTubeVideoJob on job_queues_UploadYouTubeVideoJob {
        id
        jobStatusName
        contentItem {
            id
            contentGroup {
                id
                title
            }
            name
        }
    }

    query UploadYouTubeVideos_GetAttendeeGoogleAccounts($attendeeId: uuid!) {
        AttendeeGoogleAccount(where: { attendeeId: { _eq: $attendeeId } }) {
            id
            googleAccountEmail
            youTubeData
        }
    }

    mutation UploadYouTubeVideos_CreateUploadYouTubeVideoJobs(
        $objects: [job_queues_UploadYouTubeVideoJob_insert_input!]!
    ) {
        insert_job_queues_UploadYouTubeVideoJob(objects: $objects) {
            returning {
                id
            }
        }
    }

    query UploadYouTubeVideos_GetContentItems($contentItemIds: [uuid!]!) {
        ContentItem(where: { id: { _in: $contentItemIds } }) {
            id
            name
            contentGroup {
                id
                title
            }
        }
    }

    query UploadYouTubeVideos_GetTemplateData($contentItemIds: [uuid!]!) {
        ContentItem(where: { id: { _in: $contentItemIds } }) {
            id
            name
            contentGroup {
                id
                shortTitle
                title
                contentItems {
                    id
                    youTubeUploads {
                        id
                        videoTitle
                        videoId
                    }
                }
                abstractContentItems: contentItems(
                    where: { contentTypeName: { _eq: ABSTRACT } }
                    order_by: { updatedAt: desc }
                    limit: 1
                ) {
                    ...UploadYouTubeVideos_ContentItem
                }
                paperLinkContentItems: contentItems(where: { contentTypeName: { _eq: PAPER_LINK } }) {
                    ...UploadYouTubeVideos_ContentItem
                }
                paperUrlContentItems: contentItems(where: { contentTypeName: { _eq: PAPER_URL } }) {
                    ...UploadYouTubeVideos_ContentItem
                }
                authors: people(where: { roleName: { _eq: "AUTHOR" } }) {
                    id
                    person {
                        id
                        name
                        affiliation
                    }
                }
            }
        }
    }

    fragment UploadYouTubeVideos_ContentItem on ContentItem {
        id
        data
    }

    mutation UploadYouTubeVideos_RefreshYouTubeData($attendeeGoogleAccountId: uuid!) {
        refreshYouTubeData(attendeeGoogleAccountId: $attendeeGoogleAccountId) {
            message
            success
        }
    }
`;

function VideoIcon() {
    return <FAIcon icon="video" iconStyle="s" />;
}

export function UploadYouTubeVideos(): JSX.Element {
    const conference = useConference();
    const toast = useToast();
    const attendee = useCurrentAttendee();

    const existingJobsResult = useUploadYouTubeVideos_GetUploadYouTubeVideoJobsQuery({
        variables: {
            conferenceId: conference.id,
        },
        pollInterval: 10000,
    });

    const googleAccountsResult = useUploadYouTubeVideos_GetAttendeeGoogleAccountsQuery({
        variables: {
            attendeeId: attendee.id,
        },
    });

    const googleAccountOptions = useMemo(() => {
        return googleAccountsResult.data?.AttendeeGoogleAccount.map((account) => (
            <option key={account.id} value={account.id}>
                {account.googleAccountEmail}
            </option>
        ));
    }, [googleAccountsResult.data?.AttendeeGoogleAccount]);

    const [attendeeGoogleAccountId, setAttendeeGoogleAccountId] = useState<string | null>(null);
    const channelOptions = useMemo(() => {
        const attendeeGoogleAccount = googleAccountsResult.data?.AttendeeGoogleAccount.find(
            (a) => a.id === attendeeGoogleAccountId
        );

        if (!isYouTubeDataBlob(attendeeGoogleAccount?.youTubeData)) {
            return [];
        }

        const youTubeData = attendeeGoogleAccount?.youTubeData as YouTubeDataBlob;

        return (
            youTubeData.channels.map((channel) => (
                <option key={channel.id} value={channel.id}>
                    {channel.title}
                </option>
            )) ?? []
        );
    }, [attendeeGoogleAccountId, googleAccountsResult.data?.AttendeeGoogleAccount]);

    const [channelId, setChannelId] = useState<string | null>(null);
    const playlistOptions = useMemo(() => {
        const attendeeGoogleAccount = googleAccountsResult.data?.AttendeeGoogleAccount.find(
            (a) => a.id === attendeeGoogleAccountId
        );

        if (!isYouTubeDataBlob(attendeeGoogleAccount?.youTubeData)) {
            return [];
        }

        const youTubeData = attendeeGoogleAccount?.youTubeData as YouTubeDataBlob;

        return (
            youTubeData.channels
                .find((c) => c.id === channelId)
                ?.playlists.map((playlist) => (
                    <option key={playlist.id} value={playlist.id}>
                        {playlist.title}
                    </option>
                )) ?? []
        );
    }, [attendeeGoogleAccountId, channelId, googleAccountsResult.data?.AttendeeGoogleAccount]);

    const [createJobs] = useUploadYouTubeVideos_CreateUploadYouTubeVideoJobsMutation();

    const chooseVideoDisclosure = useDisclosure();
    const chooseByTagDisclosure = useDisclosure();

    const [contentItemIds, setContentItemIds] = useState<string[]>([]);
    const { data } = useUploadYouTubeVideos_GetContentItemsQuery({
        variables: {
            contentItemIds,
        },
    });

    const contentItems = useMemo(() => {
        const pairs: [string, { name: string; contentGroupTitle: string }][] =
            data?.ContentItem.map((contentItem) => [
                contentItem.id,
                { name: contentItem.name, contentGroupTitle: contentItem.contentGroup.title },
            ]) ?? [];

        return R.fromPairs(pairs);
    }, [data]);

    const { refetch: refetchTemplateData } = useUploadYouTubeVideos_GetTemplateDataQuery({ skip: true });

    const compileTemplates = useCallback(
        async (
            contentItemIds: string[],
            titleTemplateString: string,
            descriptionTemplateString: string
        ): Promise<{ [contentItemId: string]: { title: string; description: string } }> => {
            const result = await refetchTemplateData({ contentItemIds });

            if (!result || !result.data) {
                console.error("Could not retrieve data for content item templates", result.error, result.errors);
                throw new Error("Could not retrieve data for content item templates");
            }

            const pairs = contentItemIds.map((contentItemId): [string, { title: string; description: string }] => {
                const contentItem = result.data.ContentItem.find((x) => x.id === contentItemId);

                if (!contentItem) {
                    return [
                        contentItemId,
                        {
                            title: titleTemplateString,
                            description: descriptionTemplateString,
                        },
                    ];
                }

                const fileName = contentItem.name;
                const itemTitle = contentItem.contentGroup.title;
                const itemShortTitle = contentItem.contentGroup.shortTitle;
                const abstractContentItem = contentItem.contentGroup.abstractContentItems.length
                    ? contentItem.contentGroup.abstractContentItems[0]
                    : undefined;
                const abstractContentItemData = isContentItemDataBlob(abstractContentItem?.data)
                    ? (abstractContentItem?.data as ContentItemDataBlob)
                    : undefined;
                const abstractContentItemDataLatest = abstractContentItemData
                    ? R.last(abstractContentItemData)
                    : undefined;
                const abstract =
                    abstractContentItemDataLatest?.data.baseType === ContentBaseType.Text
                        ? abstractContentItemDataLatest.data.text
                        : "";

                const paperUrls = R.flatten(
                    contentItem.contentGroup.paperUrlContentItems.map((item) => {
                        if (!isContentItemDataBlob(item.data)) {
                            return [];
                        }

                        const dataBlob = item.data as ContentItemDataBlob;
                        const latest = R.last(dataBlob);

                        if (!latest) {
                            return [];
                        }

                        if (latest.data.baseType === ContentBaseType.URL) {
                            return [latest.data.url];
                        } else {
                            return [];
                        }
                    })
                );

                const paperLinks = R.flatten(
                    contentItem.contentGroup.paperLinkContentItems.map((item) => {
                        if (!isContentItemDataBlob(item.data)) {
                            return [];
                        }

                        const dataBlob = item.data as ContentItemDataBlob;
                        const latest = R.last(dataBlob);

                        if (!latest) {
                            return [];
                        }

                        if (latest.data.baseType === ContentBaseType.Link) {
                            return [{ url: latest.data.url, text: latest.data.text }];
                        } else {
                            return [];
                        }
                    })
                );

                const youTubeUploads = R.flatten(
                    contentItem.contentGroup.contentItems.map((item) =>
                        item.youTubeUploads.map((upload) => ({
                            title: upload.videoTitle,
                            url: `https://www.youtube.com/watch?v=${upload.videoId}`,
                        }))
                    )
                );

                const authors = contentItem.contentGroup.authors.map((author) => ({
                    name: author.person.name,
                    affiliation: author.person.affiliation ?? "",
                }));

                const view = {
                    fileId: contentItemId,
                    fileName,
                    itemId: contentItem.contentGroup.id,
                    itemTitle,
                    abstract,
                    itemShortTitle,
                    paperUrls,
                    paperLinks,
                    youTubeUploads,
                    authors,
                };

                return [
                    contentItemId,
                    {
                        title: Mustache.render(titleTemplateString, view),
                        description: Mustache.render(descriptionTemplateString, view),
                    },
                ];
            });

            return R.fromPairs(pairs);
        },
        [refetchTemplateData]
    );

    const jobStatus = useCallback((jobStatusName: JobStatus_Enum) => {
        switch (jobStatusName) {
            case JobStatus_Enum.Completed:
                return (
                    <Tooltip label="Upload completed">
                        <FAIcon icon="check-circle" iconStyle="s" aria-label="completed" />
                    </Tooltip>
                );
            case JobStatus_Enum.Expired:
            case JobStatus_Enum.Failed:
                return (
                    <Tooltip label="Upload failed">
                        <FAIcon icon="exclamation-circle" iconStyle="s" aria-label="error" />
                    </Tooltip>
                );
            case JobStatus_Enum.InProgress:
            case JobStatus_Enum.New:
                return <Spinner size="sm" aria-label="in progress" />;
        }
    }, []);

    const [refreshYouTubeData] = useUploadYouTubeVideos_RefreshYouTubeDataMutation();

    const getDescriptionError = useCallback((description: string) => {
        const length = new TextEncoder().encode(description).length;
        const invalid = description.includes("<") || description.includes(">");
        const errors = [
            ...(length > 5000 ? ["Description is too long."] : []),
            ...(invalid ? ["Description cannot contain '<' or '>'."] : []),
        ];
        return errors.join(" ");
    }, []);

    const [youTubeTitleTemplate, setYouTubeTitleTemplate] = useRestorableState(
        "clowdr-youTubeTitleTemplate",
        "{{fileName}}",
        (x) => x,
        (x) => x
    );
    const [youTubeDescriptionTemplate, setYouTubeDescriptionTemplate] = useRestorableState(
        "clowdr-youTubeDescriptionTemplate",
        "{{abstract}}",
        (x) => x,
        (x) => x
    );

    return (
        <>
            <HStack alignItems="flex-start">
                <VStack alignItems="flex-start" flexGrow={1}>
                    <Formik<{
                        contentItemIds: string[];
                        attendeeGoogleAccountId: string | null;
                        titleTemplate: string;
                        descriptionTemplate: string;
                        channelId: string | null;
                        playlistId: string | null;
                        videoPrivacyStatus: string;
                        titleCorrections: { [contentItemId: string]: string };
                        descriptionCorrections: { [contentItemId: string]: string };
                    }>
                        initialValues={{
                            contentItemIds: [],
                            attendeeGoogleAccountId: null,
                            titleTemplate: youTubeTitleTemplate,
                            descriptionTemplate: youTubeDescriptionTemplate,
                            channelId: null,
                            playlistId: null,
                            videoPrivacyStatus: "unlisted",
                            titleCorrections: {},
                            descriptionCorrections: {},
                        }}
                        onSubmit={async (values, actions) => {
                            try {
                                const details = await compileTemplates(
                                    values.contentItemIds,
                                    values.titleTemplate,
                                    values.descriptionTemplate
                                );

                                const updatedPairs = R.mapObjIndexed(
                                    (x, key) => ({
                                        title: values.titleCorrections[key] ?? x.title,
                                        description: values.descriptionCorrections[key] ?? x.description,
                                    }),
                                    details
                                );

                                let correctionsNeeded = false;

                                const invalidTitles = R.filter((x) => x.title.length > 100, updatedPairs);

                                R.forEachObjIndexed((value, contentItemId) => {
                                    actions.setFieldValue(`titleCorrections.${contentItemId}`, value.title ?? null);
                                    actions.setFieldError(
                                        `titleCorrections.${contentItemId}`,
                                        "Title cannot be more than 100 characters"
                                    );
                                    correctionsNeeded = true;
                                }, invalidTitles);

                                R.forEachObjIndexed((value, contentItemId) => {
                                    const error = getDescriptionError(value.description);
                                    if (error) {
                                        actions.setFieldValue(
                                            `descriptionCorrections.${contentItemId}`,
                                            value.description ?? null
                                        );
                                        actions.setFieldError(`descriptionCorrections.${contentItemId}`, error);
                                        correctionsNeeded = true;
                                    }
                                }, updatedPairs);

                                if (correctionsNeeded) {
                                    toast({
                                        status: "info",
                                        title: "You need to make some corrections before starting the upload",
                                    });
                                    return;
                                }

                                await createJobs({
                                    variables: {
                                        objects: values.contentItemIds.map(
                                            (id): Job_Queues_UploadYouTubeVideoJob_Insert_Input => ({
                                                contentItemId: id,
                                                attendeeGoogleAccountId: values.attendeeGoogleAccountId,
                                                conferenceId: conference.id,
                                                videoTitle: updatedPairs[id]?.title ?? id,
                                                videoDescription: updatedPairs[id]?.description ?? "",
                                                videoPrivacyStatus: values.videoPrivacyStatus,
                                                playlistId: values.playlistId,
                                            })
                                        ),
                                    },
                                });
                                toast({
                                    status: "success",
                                    title: "Starting upload to YouTube",
                                });
                                actions.resetForm();
                                actions.setFieldValue("titleTemplate", youTubeTitleTemplate);
                                actions.setFieldValue("descriptionTemplate", youTubeDescriptionTemplate);
                                setAttendeeGoogleAccountId(null);
                                await existingJobsResult.refetch();
                            } catch (e) {
                                console.error("Error while creating YouTube upload jobs", e);
                                toast({
                                    status: "error",
                                    title: "Failed to create YouTube upload job",
                                    description: e.message,
                                });
                            }
                        }}
                    >
                        {({ isSubmitting, isValid, values, touched }) => {
                            if (!R.isEmpty(R.symmetricDifference(values.contentItemIds, contentItemIds))) {
                                setContentItemIds(values.contentItemIds);
                            }

                            return (
                                <Form>
                                    <Heading as="h2" size="md" textAlign="left" my={4}>
                                        Choose videos to upload
                                    </Heading>
                                    <Field
                                        name="contentItemIds"
                                        validate={(ids: string[]) =>
                                            ids.length > 0 ? undefined : "Must choose at least one video"
                                        }
                                    >
                                        {({ field, form }: FieldProps<string[]>) => (
                                            <FormControl
                                                isInvalid={
                                                    !!form.errors.contentItemIds && !!form.touched.contentItemIds
                                                }
                                                isRequired
                                            >
                                                <Button
                                                    aria-label="add a single video"
                                                    size="sm"
                                                    onClick={() => chooseVideoDisclosure.onOpen()}
                                                >
                                                    <FAIcon icon="plus-square" iconStyle="s" mr={2} />
                                                    Add a video
                                                </Button>
                                                <ChooseContentItemModal
                                                    chooseItem={(contentItemId) =>
                                                        form.setFieldValue(
                                                            field.name,
                                                            R.union(form.values.contentItemIds, [contentItemId])
                                                        )
                                                    }
                                                    isOpen={chooseVideoDisclosure.isOpen}
                                                    onClose={chooseVideoDisclosure.onClose}
                                                />
                                                <Button
                                                    aria-label="add a videos by tag"
                                                    size="sm"
                                                    ml={4}
                                                    onClick={() => chooseByTagDisclosure.onOpen()}
                                                >
                                                    <FAIcon icon="plus-square" iconStyle="s" mr={2} />
                                                    Add videos by tag
                                                </Button>
                                                <ChooseContentItemByTagModal
                                                    chooseItems={(contentItemIds) =>
                                                        form.setFieldValue(
                                                            field.name,
                                                            R.union(form.values.contentItemIds, contentItemIds)
                                                        )
                                                    }
                                                    isOpen={chooseByTagDisclosure.isOpen}
                                                    onClose={chooseByTagDisclosure.onClose}
                                                />

                                                <Button
                                                    aria-label="clear all videos"
                                                    size="sm"
                                                    ml={4}
                                                    onClick={() => form.setFieldValue(field.name, [])}
                                                    isDisabled={form.values.contentItemIds.length === 0}
                                                >
                                                    <FAIcon icon="trash-alt" iconStyle="r" mr={2} />
                                                    Clear all
                                                </Button>

                                                <List mt={4} spacing={2}>
                                                    {form.values.contentItemIds.map((id: string) => (
                                                        <ListItem key={id}>
                                                            <HStack>
                                                                <ListIcon as={VideoIcon} />
                                                                {contentItems[id] ? (
                                                                    <Text pr={4}>
                                                                        {contentItems[id].name} (
                                                                        {contentItems[id].contentGroupTitle})
                                                                    </Text>
                                                                ) : (
                                                                    <Spinner />
                                                                )}
                                                                <Button
                                                                    size="xs"
                                                                    aria-label="remove video"
                                                                    colorScheme="red"
                                                                    style={{ marginLeft: "auto" }}
                                                                    onClick={() => {
                                                                        form.setFieldValue(
                                                                            field.name,
                                                                            R.without([id], form.values.contentItemIds)
                                                                        );
                                                                    }}
                                                                >
                                                                    <FAIcon
                                                                        icon="trash-alt"
                                                                        iconStyle="r"
                                                                        fontSize="xs"
                                                                    />
                                                                </Button>
                                                            </HStack>
                                                        </ListItem>
                                                    ))}
                                                    {form.values.contentItemIds.length === 0 ? (
                                                        <Text>No videos selected.</Text>
                                                    ) : undefined}
                                                </List>
                                                <FormErrorMessage>{form.errors.contentItemIds}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="videoPrivacyStatus">
                                        {({ field, form }: FieldProps<string>) => (
                                            <FormControl
                                                isInvalid={
                                                    !!form.errors.videoPrivacyStatus &&
                                                    !!form.touched.videoPrivacyStatus
                                                }
                                                isRequired
                                            >
                                                <FormLabel htmlFor="videoPrivacyStatus" mt={2}>
                                                    Video privacy
                                                </FormLabel>
                                                <Select {...field} id="videoPrivacyStatus" mt={2}>
                                                    <option value="private">Private</option>
                                                    <option value="public">Public</option>
                                                    <option value="unlisted">Unlisted</option>
                                                </Select>
                                                <FormErrorMessage>{form.errors.videoPrivacyStatus}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Heading as="h2" size="md" textAlign="left" my={4}>
                                        Set video titles and descriptions
                                    </Heading>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button>
                                                <FAIcon icon="question-circle" iconStyle="s" mr={2} />
                                                Help
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>Title and description templates</PopoverHeader>
                                            <PopoverBody>
                                                <Text mb={2}>
                                                    Titles and descriptions for uploaded YouTube videos are defined
                                                    using <Link href="https://mustache.github.io/">Mustache</Link>{" "}
                                                    templates. The following fields are available:
                                                </Text>
                                                <List fontSize="sm">
                                                    <ListItem>
                                                        <Code>fileName</Code>: name of the file
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>itemTitle</Code>: title of the content item this video
                                                        belongs to
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>itemShortTitle</Code>: short title of the content item
                                                        this video belongs to
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>abstract</Code>: the abstract text for the content item
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>paperUrls</Code>: list of URLs to papers
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>paperLinks</Code>: list of links to papers. Properties are{" "}
                                                        <Code>url</Code>, <Code>text</Code>.
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>authors</Code>: list of authors. Properties are{" "}
                                                        <Code>name</Code>, <Code>affiliation</Code>.
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>youTubeUploads</Code>: list of previously uploaded YouTube
                                                        videos for this content item. Properties are <Code>url</Code>,{" "}
                                                        <Code>title</Code>.
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>fileId</Code>: unique ID of the file
                                                    </ListItem>
                                                    <ListItem>
                                                        <Code>itemId</Code>: unique ID of the item that contains this
                                                        file
                                                    </ListItem>
                                                </List>
                                                <Text mt={2}>Example:</Text>
                                                <Code display="block" whiteSpace="pre">
                                                    {`{{abstract}}
{{#youTubeUploads}}
    * {{title}}: {{{url}}}
{{/youTubeUploads}}`}
                                                </Code>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Field name="titleTemplate">
                                        {({ field, form }: FieldProps<string>) => (
                                            <FormControl
                                                isInvalid={!!form.errors.titleTemplate && !!form.touched.titleTemplate}
                                                isRequired
                                            >
                                                <FormLabel htmlFor="titleTemplate" mt={2}>
                                                    Video title template
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    id="titleTemplate"
                                                    placeholder="{{fileName}}"
                                                    mt={2}
                                                    onChange={(event) => {
                                                        setYouTubeTitleTemplate(event.target.value);
                                                        field.onChange(event);
                                                    }}
                                                />
                                                <FormErrorMessage>{form.errors.titleTemplate}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="descriptionTemplate">
                                        {({ field, form }: FieldProps<string>) => (
                                            <FormControl
                                                isInvalid={
                                                    !!form.errors.descriptionTemplate &&
                                                    !!form.touched.descriptionTemplate
                                                }
                                                isRequired
                                            >
                                                <FormLabel htmlFor="descriptionTemplate" mt={2}>
                                                    Video description template
                                                </FormLabel>
                                                <Textarea
                                                    {...field}
                                                    id="descriptionTemplate"
                                                    placeholder="{{abstract}}"
                                                    mt={2}
                                                    onChange={(event) => {
                                                        setYouTubeDescriptionTemplate(event.target.value);
                                                        field.onChange(event);
                                                    }}
                                                />
                                                <FormErrorMessage>{form.errors.descriptionTemplate}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Heading as="h2" size="md" textAlign="left" my={4}>
                                        Choose upload location
                                    </Heading>
                                    <Field name="attendeeGoogleAccountId">
                                        {({ field, form }: FieldProps<string>) => (
                                            <>
                                                <FormControl
                                                    isInvalid={
                                                        !!form.errors.attendeeGoogleAccountId &&
                                                        !!form.touched.attendeeGoogleAccountId
                                                    }
                                                    isRequired
                                                >
                                                    <FormLabel htmlFor="attendeeGoogleAccountId" mt={2}>
                                                        Google Account
                                                    </FormLabel>
                                                    <Select
                                                        {...field}
                                                        id="attendeeGoogleAccountId"
                                                        placeholder="Choose Google account"
                                                        mt={2}
                                                        onChange={(event) => {
                                                            setAttendeeGoogleAccountId(event.target.value);
                                                            field.onChange(event);
                                                        }}
                                                    >
                                                        {googleAccountOptions}
                                                    </Select>
                                                    <FormErrorMessage>
                                                        {form.errors.attendeeGoogleAccountId}
                                                    </FormErrorMessage>
                                                </FormControl>
                                                <Button
                                                    display="block"
                                                    my={2}
                                                    size="sm"
                                                    aria-label="refresh playlists"
                                                    isDisabled={!form.values.attendeeGoogleAccountId}
                                                    onClick={async () => {
                                                        try {
                                                            const result = await refreshYouTubeData({
                                                                variables: {
                                                                    attendeeGoogleAccountId:
                                                                        form.values.attendeeGoogleAccountId,
                                                                },
                                                            });
                                                            if (!result.data?.refreshYouTubeData?.success) {
                                                                throw new Error(
                                                                    result.data?.refreshYouTubeData?.message ??
                                                                        "Unknown reason"
                                                                );
                                                            }

                                                            await googleAccountsResult.refetch({
                                                                attendeeId: attendee.id,
                                                            });

                                                            toast({
                                                                status: "success",
                                                                title: "Refreshed YouTube channel details",
                                                            });
                                                        } catch (e) {
                                                            console.error(
                                                                "Failed to refresh YouTube channel details",
                                                                e
                                                            );
                                                            toast({
                                                                status: "error",
                                                                title: "Failed to refresh YouTube channel details",
                                                                description: e.message,
                                                            });
                                                        }
                                                    }}
                                                >
                                                    <HStack>
                                                        <FAIcon icon="sync" iconStyle="s" />
                                                        <Text ml={2}>Refresh</Text>
                                                    </HStack>
                                                </Button>
                                            </>
                                        )}
                                    </Field>

                                    <Field name="channelId">
                                        {({ field, form }: FieldProps<string>) => (
                                            <>
                                                <FormControl
                                                    isInvalid={!!form.errors.channelId && !!form.touched.channelId}
                                                    isRequired
                                                >
                                                    <FormLabel htmlFor="channelId" mt={2}>
                                                        Channel
                                                    </FormLabel>
                                                    <Select
                                                        {...field}
                                                        id="channelId"
                                                        placeholder="Choose channel"
                                                        mt={2}
                                                        isDisabled={!form.values.attendeeGoogleAccountId}
                                                        onChange={(event) => {
                                                            setChannelId(event.target.value);
                                                            field.onChange(event);
                                                        }}
                                                    >
                                                        {channelOptions}
                                                    </Select>
                                                    <FormErrorMessage>{form.errors.channelId}</FormErrorMessage>
                                                </FormControl>
                                            </>
                                        )}
                                    </Field>

                                    <Field name="playlistId">
                                        {({ field, form }: FieldProps<string>) => (
                                            <>
                                                <FormControl
                                                    isInvalid={!!form.errors.playlistId && !!form.touched.playlistId}
                                                >
                                                    <FormLabel htmlFor="playlistId" mt={2}>
                                                        Playlist
                                                    </FormLabel>
                                                    <Select
                                                        {...field}
                                                        id="playlistId"
                                                        placeholder="Choose playlist"
                                                        isDisabled={!form.values.attendeeGoogleAccountId}
                                                        mt={2}
                                                    >
                                                        {playlistOptions}
                                                    </Select>
                                                    <FormErrorMessage>{form.errors.playlistId}</FormErrorMessage>
                                                </FormControl>
                                            </>
                                        )}
                                    </Field>

                                    <FieldArray
                                        name="titleCorrections"
                                        render={(arrayHelpers) =>
                                            values.titleCorrections &&
                                            Object.keys(values.titleCorrections).length > 0 ? (
                                                <>
                                                    <Heading as="h2" size="md" textAlign="left" my={4}>
                                                        Corrected video titles
                                                    </Heading>
                                                    {R.toPairs<string>(values.titleCorrections).map(
                                                        ([contentItemId, title]) => (
                                                            <Field
                                                                key={contentItemId}
                                                                name={`titleCorrections.${contentItemId}`}
                                                                validate={(title: string) =>
                                                                    title.length <= 100
                                                                        ? undefined
                                                                        : "Title cannot be more than 100 characters"
                                                                }
                                                                isRequired
                                                            >
                                                                {({ field, form }: FieldProps<string>) => (
                                                                    <FormControl
                                                                        isInvalid={
                                                                            !!(form.errors.titleCorrections ??
                                                                                ({} as any))[contentItemId] &&
                                                                            !!(form.touched.titleCorrections ??
                                                                                ({} as any))[contentItemId]
                                                                        }
                                                                        isRequired
                                                                    >
                                                                        <FormLabel
                                                                            htmlFor={`titleCorrections.${contentItemId}`}
                                                                            mt={2}
                                                                        >
                                                                            Title for {contentItems[contentItemId].name}{" "}
                                                                            (
                                                                            {
                                                                                contentItems[contentItemId]
                                                                                    .contentGroupTitle
                                                                            }
                                                                            )
                                                                        </FormLabel>
                                                                        <Input
                                                                            {...field}
                                                                            id={`titleCorrections.${contentItemId}`}
                                                                            placeholder="Replacement title"
                                                                        />
                                                                        <FormErrorMessage>
                                                                            {
                                                                                (form.errors.titleCorrections ??
                                                                                    ({} as any))[contentItemId]
                                                                            }
                                                                        </FormErrorMessage>
                                                                    </FormControl>
                                                                )}
                                                            </Field>
                                                        )
                                                    )}
                                                </>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    />

                                    <FieldArray
                                        name="descriptionCorrections"
                                        render={(arrayHelpers) =>
                                            values.descriptionCorrections &&
                                            Object.keys(values.descriptionCorrections).length > 0 ? (
                                                <>
                                                    <Heading as="h2" size="md" textAlign="left" my={4}>
                                                        Corrected video descriptions
                                                    </Heading>
                                                    {R.toPairs<string>(values.descriptionCorrections).map(
                                                        ([contentItemId, description]) => (
                                                            <Field
                                                                key={contentItemId}
                                                                name={`descriptionCorrections.${contentItemId}`}
                                                                validate={getDescriptionError}
                                                                isRequired
                                                            >
                                                                {({ field, form }: FieldProps<string>) => (
                                                                    <FormControl
                                                                        isInvalid={
                                                                            !!(form.errors.descriptionCorrections ??
                                                                                ({} as any))[contentItemId] &&
                                                                            !!(form.touched.descriptionCorrections ??
                                                                                ({} as any))[contentItemId]
                                                                        }
                                                                        isRequired
                                                                    >
                                                                        <FormLabel
                                                                            htmlFor={`descriptionCorrections.${contentItemId}`}
                                                                            mt={2}
                                                                        >
                                                                            Description for{" "}
                                                                            {contentItems[contentItemId].name} (
                                                                            {
                                                                                contentItems[contentItemId]
                                                                                    .contentGroupTitle
                                                                            }
                                                                            )
                                                                        </FormLabel>
                                                                        <Textarea
                                                                            {...field}
                                                                            id={`descriptionCorrections.${contentItemId}`}
                                                                            size="sm"
                                                                            placeholder="Replacement description"
                                                                        />
                                                                        <FormErrorMessage>
                                                                            {
                                                                                (form.errors.descriptionCorrections ??
                                                                                    ({} as any))[contentItemId]
                                                                            }
                                                                        </FormErrorMessage>
                                                                    </FormControl>
                                                                )}
                                                            </Field>
                                                        )
                                                    )}
                                                </>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    />

                                    <Button
                                        type="submit"
                                        isLoading={isSubmitting}
                                        isDisabled={!isValid || !touched}
                                        mt={4}
                                        colorScheme="green"
                                    >
                                        Upload videos
                                    </Button>
                                </Form>
                            );
                        }}
                    </Formik>
                </VStack>
                <ApolloQueryWrapper
                    queryResult={existingJobsResult}
                    getter={(result) => result.job_queues_UploadYouTubeVideoJob}
                >
                    {(jobs: readonly UploadYouTubeVideos_UploadYouTubeVideoJobFragment[]) => (
                        <VStack display={jobs.length ? "block" : "none"} maxWidth="30em">
                            <Heading as="h2" size="md" textAlign="left" mt={4} mb={2}>
                                Upload jobs
                            </Heading>
                            <List>
                                {jobs.length > 0 ? (
                                    jobs.map((job) => (
                                        <ListItem key={job.id}>
                                            <HStack>
                                                <Text>
                                                    {job.contentItem.contentGroup.title} ({job.contentItem.name})
                                                </Text>
                                                <Box ml={2}>{jobStatus(job.jobStatusName)}</Box>
                                            </HStack>
                                        </ListItem>
                                    ))
                                ) : (
                                    <Text>No upload jobs.</Text>
                                )}
                            </List>
                        </VStack>
                    )}
                </ApolloQueryWrapper>
            </HStack>
        </>
    );
}
