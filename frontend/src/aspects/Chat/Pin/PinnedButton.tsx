import { Box, Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import React from "react";
import FAIcon from "../../Icons/FAIcon";
import { useChatConfiguration } from "../Configuration";
import { useChatPinnedQuery } from "./PinnedQuery";

export function PinnedButton(props: ButtonProps): JSX.Element {
    const config = useChatConfiguration();
    const pinnedQ = useChatPinnedQuery();
    const isLoading = pinnedQ.loading;
    const isPinned = !!pinnedQ.data?.isPinned;
    const label = isLoading
        ? "Loading pinned status"
        : isPinned
        ? "Unpin this chat from the sidebar"
        : "Pin this chat to the sidebar";

    return pinnedQ.data?.allowedToUnpin &&
        ((config.permissions.canPin && !isPinned) || (config.permissions.canUnpin && isPinned)) ? (
        <Tooltip label={label} fontSize={config.fontSizeRange.value}>
            <Box>
                <Button
                    aria-label={label}
                    onClick={() => {
                        pinnedQ.mutate?.(!isPinned);
                    }}
                    isLoading={isLoading}
                    h="100%"
                    {...props}
                    _disabled={{
                        opacity: 0.4,
                        cursor: "progress",
                    }}
                >
                    <FAIcon
                        iconStyle="s"
                        icon="thumbtack"
                        transform={isPinned ? "" : "rotate(180deg)"}
                        transition="transform 0.3s linear"
                    />
                </Button>
            </Box>
        </Tooltip>
    ) : (
        <></>
    );
}
