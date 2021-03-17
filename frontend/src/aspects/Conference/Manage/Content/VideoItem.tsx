import { Heading } from "@chakra-ui/react";
import { ContentBaseType, ContentItemVersionData } from "@clowdr-app/shared-types/build/content";
import assert from "assert";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ContentType_Enum } from "../../../../generated/graphql";
import { ContentGroupVideo } from "../../Attend/Content/ContentGroupVideos";
import { RefreshSubtitles } from "./RefreshSubtitles";
import type { ItemBaseTemplate, RenderEditorProps } from "./Types";
import UploadFileForm_ContentItem from "./UploadFileForm_ContentItem";
import UploadFileForm_Subtitles from "./UploadFileForm_Subtitles";

function createDefaultVideo(
    type:
        | ContentType_Enum.VideoBroadcast
        | ContentType_Enum.VideoCountdown
        | ContentType_Enum.VideoFile
        | ContentType_Enum.VideoFiller
        | ContentType_Enum.VideoPrepublish
        | ContentType_Enum.VideoSponsorsFiller
        | ContentType_Enum.VideoTitles
): ContentItemVersionData {
    return {
        createdAt: new Date().getTime(),
        createdBy: "user",
        data: {
            type,
            baseType: ContentBaseType.Video,
            s3Url: "",
            subtitles: {},
        },
    };
}

export const VideoItemTemplate: ItemBaseTemplate = {
    supported: true,
    createDefault: (type, required) => {
        assert(
            type === ContentType_Enum.VideoBroadcast ||
                type === ContentType_Enum.VideoCountdown ||
                type === ContentType_Enum.VideoFile ||
                type === ContentType_Enum.VideoFiller ||
                type === ContentType_Enum.VideoPrepublish ||
                type === ContentType_Enum.VideoSponsorsFiller ||
                type === ContentType_Enum.VideoTitles,
            `Video Item Template mistakenly used for type ${type}.`
        );

        const name =
            type === ContentType_Enum.VideoBroadcast
                ? "Livestream broadcast video"
                : type === ContentType_Enum.VideoCountdown
                ? "Timer countdown video"
                : type === ContentType_Enum.VideoFile
                ? "Video file"
                : type === ContentType_Enum.VideoFiller
                ? "Filler video"
                : type === ContentType_Enum.VideoPrepublish
                ? "Pre-published video"
                : type === ContentType_Enum.VideoSponsorsFiller
                ? "Sponsors filler video"
                : "Titles video";
        if (required) {
            return {
                type: "required-only",
                requiredItem: {
                    isNew: true,
                    id: uuidv4(),
                    name,
                    isHidden: false,
                    typeName: type,
                    uploaders: [],
                },
            };
        } else {
            return {
                type: "item-only",
                item: {
                    isNew: true,
                    id: uuidv4(),
                    name,
                    typeName: type,
                    isHidden: false,
                    data: [],
                    layoutData: null,
                },
            };
        }
    },
    renderEditor: function VideoItemEditor({ data, update }: RenderEditorProps) {
        if (data.type === "item-only" || data.type === "required-and-item") {
            if (
                !(
                    data.item.typeName === ContentType_Enum.VideoBroadcast ||
                    data.item.typeName === ContentType_Enum.VideoCountdown ||
                    data.item.typeName === ContentType_Enum.VideoFile ||
                    data.item.typeName === ContentType_Enum.VideoFiller ||
                    data.item.typeName === ContentType_Enum.VideoPrepublish ||
                    data.item.typeName === ContentType_Enum.VideoSponsorsFiller ||
                    data.item.typeName === ContentType_Enum.VideoTitles
                )
            ) {
                return <>Video Item Template mistakenly used for type {data.type}.</>;
            }

            if (data.item.data.length === 0) {
                data = {
                    ...data,
                    item: {
                        ...data.item,
                        data: [createDefaultVideo(data.item.typeName)],
                    },
                };
                setTimeout(() => update(data), 0);
            }

            const latestVersion = data.item.data[data.item.data.length - 1];
            if (latestVersion.data.baseType !== ContentBaseType.Video) {
                return <>Video Item Template mistakenly used for base type {latestVersion.data.baseType}.</>;
            }
            return (
                <>
                    <ContentGroupVideo title={data.item.name} videoContentItemData={latestVersion.data} />
                    <Heading as="h3" fontSize="lg" mb={4}>
                        Upload new video
                    </Heading>
                    <UploadFileForm_ContentItem
                        allowedFileTypes={["video/mp4", "video/webm"]}
                        item={data.item}
                        onItemChange={(newItem) => {
                            const newData = {
                                ...data,
                                item: newItem,
                            };
                            update(newData);
                        }}
                        contentBaseType={ContentBaseType.Video}
                    />
                    <UploadFileForm_Subtitles
                        item={data.item}
                        onItemChange={(newItem) => {
                            const newData = {
                                ...data,
                                item: newItem,
                            };
                            update(newData);
                        }}
                        contentBaseType={ContentBaseType.Video}
                    />
                    <RefreshSubtitles
                        item={data.item}
                        onItemChange={(newItem) => {
                            const newData = {
                                ...data,
                                item: newItem,
                            };
                            update(newData);
                        }}
                    />
                </>
            );
        }
        return <>No video uploaded yet.</>;
    },
    renderEditorHeading: function VideoItemEditorHeading(data) {
        return <>{data.type === "item-only" ? data.item.name : data.requiredItem.name}</>;
    },
};
