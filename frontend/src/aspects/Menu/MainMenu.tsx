import { useAuth0 } from "@auth0/auth0-react";
import {
    Button,
    CloseButton,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    Spacer,
    Stack,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import AuthenticationButton from "../Auth/Buttons/AuthenticationButton";
import SignupButton from "../Auth/Buttons/SignUpButton";
import LinkButton from "../Chakra/LinkButton";
import FAIcon from "../Icons/FAIcon";
import IncognitoToggleButton from "../Users/CurrentUser/OnlineStatus/IncognitoToggleButton";

interface Props {}

export default function MainMenu(_props: Props): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuthenticated } = useAuth0();

    const menuItemClicked = () => onClose();

    return (
        <>
            <Stack
                direction="row"
                spacing="2"
                justify="start"
                align="center"
                wrap="wrap"
            >
                <Button
                    colorScheme="green"
                    onClick={onOpen}
                    title="Open main menu"
                >
                    Menu
                </Button>
                <Heading as="h1" fontSize="140%" height="auto">
                    Clowdr Chat Demo
                </Heading>
                <Spacer />
                <AuthenticationButton />
                <SignupButton />
            </Stack>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth="1px">
                            <Flex direction="row" align="center">
                                <Heading as="h2" height="auto">
                                    Menu
                                </Heading>
                                <Spacer />
                                <IncognitoToggleButton />
                                <CloseButton
                                    colorScheme="green"
                                    onClick={onClose}
                                    title="Close main menu"
                                />
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack align="stretch" spacing={0}>
                                <LinkButton
                                    aria-label="Home"
                                    leftIcon={
                                        <FAIcon
                                            iconStyle="s"
                                            icon="home"
                                            inline
                                        />
                                    }
                                    to={"/"}
                                    onClick={menuItemClicked}
                                >
                                    Home
                                </LinkButton>
                                <LinkButton
                                    aria-label="Echo"
                                    leftIcon={
                                        <FAIcon
                                            iconStyle="s"
                                            icon="comment-alt"
                                            inline
                                        />
                                    }
                                    to={"/echo"}
                                    onClick={menuItemClicked}
                                >
                                    Echo
                                </LinkButton>
                                {isAuthenticated ? (
                                    <LinkButton
                                        colorScheme="red"
                                        aria-label="Protected echo"
                                        leftIcon={
                                            <FAIcon
                                                iconStyle="s"
                                                icon="comment-alt"
                                                inline
                                            />
                                        }
                                        to={"/protectedEcho"}
                                        onClick={menuItemClicked}
                                    >
                                        Protected echo
                                    </LinkButton>
                                ) : (
                                    <></>
                                )}
                                {isAuthenticated ? (
                                    <LinkButton
                                        colorScheme="blue"
                                        aria-label="Profile"
                                        leftIcon={
                                            <FAIcon
                                                iconStyle="s"
                                                icon="user"
                                                inline
                                            />
                                        }
                                        to={"/profile"}
                                        onClick={menuItemClicked}
                                    >
                                        Profile
                                    </LinkButton>
                                ) : (
                                    <></>
                                )}
                                {isAuthenticated ? (
                                    <LinkButton
                                        colorScheme="green"
                                        aria-label="Chats"
                                        leftIcon={
                                            <FAIcon
                                                iconStyle="s"
                                                icon="users"
                                                inline
                                            />
                                        }
                                        to={"/"}
                                        onClick={menuItemClicked}
                                    >
                                        Chats
                                    </LinkButton>
                                ) : (
                                    <></>
                                )}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}