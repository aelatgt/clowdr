import {
    CloseButton,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    Link,
    Spacer,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { HtmlPortalNode, OutPortal } from "react-reverse-portal";
import { Link as ReactLink } from "react-router-dom";
import IncognitoToggleButton from "../Users/CurrentUser/OnlineStatus/IncognitoToggleButton";
import { useMainMenu } from "./MainMenuState";

interface Props {
    isOpen: boolean;
    portalNode: HtmlPortalNode<React.Component<any>>;
}

export default function MainMenuDrawer({ isOpen, portalNode }: Props): JSX.Element {
    const { onClose } = useMainMenu();

    const menuItemClicked = useCallback(() => onClose(), [onClose]);
    const initialFocusRef = React.createRef<HTMLButtonElement>();

    return (
        <>
            <Drawer
                id="main-menu"
                placement="left"
                onClose={onClose}
                isOpen={isOpen}
                size="sm"
                initialFocusRef={initialFocusRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth="1px">
                            <Flex direction="row" align="center">
                                <Heading as="h2" height="auto" fontSize="lg">
                                    <Link as={ReactLink} to="/" textDecoration="none">
                                        Clowdr
                                    </Link>
                                </Heading>
                                <Spacer />
                                <IncognitoToggleButton />
                                <CloseButton ref={initialFocusRef} ml={2} onClick={onClose} title="Close main menu" />
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody>
                            <OutPortal node={portalNode} />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}