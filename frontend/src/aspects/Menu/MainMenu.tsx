import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    chakra,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Stack,
    Tooltip,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Route, RouteComponentProps, Switch, useHistory } from "react-router-dom";
import { Permission_Enum } from "../../generated/graphql";
import AuthenticationButton from "../Auth/Buttons/AuthenticationButton";
import SignupButton from "../Auth/Buttons/SignUpButton";
import ColorModeButton from "../Chakra/ColorModeButton";
import { LinkButton } from "../Chakra/LinkButton";
import { useConferenceCurrentUserActivePermissions } from "../Conference/useConferenceCurrentUserActivePermissions";
import { useMaybeCurrentAttendee } from "../Conference/useCurrentAttendee";
import FAIcon from "../Icons/FAIcon";
import useMaybeCurrentUser from "../Users/CurrentUser/useMaybeCurrentUser";
import { MenuState, MenuStateContext, useMainMenu } from "./MainMenuState";
import usePrimaryMenuButtons, { PrimaryMenuButtonsProvider } from "./usePrimaryMenuButtons";

interface Props {
    children: React.ReactNode | React.ReactNodeArray;
    state: MenuState;
}

function MenuBar(): JSX.Element {
    const { buttons: primaryButtons } = usePrimaryMenuButtons();
    const { user } = useMaybeCurrentUser();
    const attendee = useMaybeCurrentAttendee();
    const permissions = useConferenceCurrentUserActivePermissions();
    const isPermittedAccess = attendee && permissions.has(Permission_Enum.ConferenceViewAttendees);
    const mainMenu = useMainMenu();

    const mergeItems = useBreakpointValue({ base: true, md: false });
    const history = useHistory();

    const leftColorScheme = "blue";
    const leftBackgroundColour = useColorModeValue(`${leftColorScheme}.200`, `${leftColorScheme}.600`);
    const leftForegroundColour = useColorModeValue("black", "white");

    const rightColorScheme = "purple";
    const rightBackgroundColour = useColorModeValue(`${rightColorScheme}.200`, `${rightColorScheme}.600`);
    const rightForegroundColour = useColorModeValue("black", "white");

    const navButton = useMemo(
        () =>
            isPermittedAccess ? (
                <Route path="/conference">
                    <Tooltip label={mainMenu.isLeftBarOpen ? "Close navigation" : "Open navigation"}>
                        <Button
                            onClick={mainMenu.isLeftBarOpen ? mainMenu.onLeftBarClose : mainMenu.onLeftBarOpen}
                            size="sm"
                            aria-label={mainMenu.isLeftBarOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-haspopup="menu"
                            aria-expanded={mainMenu.isLeftBarOpen ? true : undefined}
                            aria-controls="left-bar"
                            colorScheme={leftColorScheme}
                            backgroundColor={leftBackgroundColour}
                            color={leftForegroundColour}
                        >
                            {mainMenu.isLeftBarOpen ? (
                                <FAIcon iconStyle="s" icon="times" aria-hidden />
                            ) : (
                                <FAIcon iconStyle="s" icon="bars" aria-hidden />
                            )}
                        </Button>
                    </Tooltip>
                </Route>
            ) : undefined,
        [
            isPermittedAccess,
            leftBackgroundColour,
            leftForegroundColour,
            mainMenu.isLeftBarOpen,
            mainMenu.onLeftBarClose,
            mainMenu.onLeftBarOpen,
        ]
    );

    const chatButton = useMemo(
        () =>
            isPermittedAccess ? (
                <Route path="/conference">
                    <Tooltip label={mainMenu.isRightBarOpen ? "Close chats" : "Open chats"}>
                        <Button
                            onClick={mainMenu.isRightBarOpen ? mainMenu.onRightBarClose : mainMenu.onRightBarOpen}
                            size="sm"
                            aria-label={mainMenu.isRightBarOpen ? "Close chats" : "Open chats"}
                            aria-haspopup="menu"
                            aria-expanded={mainMenu.isRightBarOpen ? true : undefined}
                            aria-controls="right-bar"
                            colorScheme={rightColorScheme}
                            backgroundColor={rightBackgroundColour}
                            color={rightForegroundColour}
                        >
                            {mainMenu.isRightBarOpen ? (
                                <FAIcon iconStyle="s" icon="comment-slash" aria-hidden />
                            ) : (
                                <FAIcon iconStyle="s" icon="comment" aria-hidden />
                            )}
                        </Button>
                    </Tooltip>
                </Route>
            ) : undefined,
        [
            isPermittedAccess,
            mainMenu.isRightBarOpen,
            mainMenu.onRightBarClose,
            mainMenu.onRightBarOpen,
            rightBackgroundColour,
            rightForegroundColour,
        ]
    );

    const homeButton = useMemo(
        () => (
            <Switch>
                <Route
                    path="/conference/:confSlug"
                    component={(
                        props: RouteComponentProps<{
                            confSlug: string;
                        }>
                    ) => (
                        <LinkButton
                            to={`/conference/${props.match.params.confSlug}`}
                            size="sm"
                            w="3ex"
                            aria-label="Conference home"
                            p={0}
                        >
                            <Image src="/android-chrome-192x192.png" objectFit="contain" />
                        </LinkButton>
                    )}
                />
                <Route path="/">
                    <LinkButton to="/" size="sm" w="3ex" aria-label="Clowdr home" p={0}>
                        <Image src="/android-chrome-192x192.png" objectFit="contain" />
                    </LinkButton>
                </Route>
            </Switch>
        ),
        []
    );

    const primaryMenuButtons = useMemo(
        () =>
            mergeItems ? (
                <>
                    <Spacer />
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
                            Go to
                        </MenuButton>
                        <MenuList>
                            {primaryButtons.map((button) => (
                                <MenuItem
                                    key={button.key}
                                    colorScheme={button.colorScheme}
                                    aria-label={button.label}
                                    onClick={() => {
                                        if (typeof button.action === "string") {
                                            history.push(button.action);
                                        } else {
                                            button.action();
                                        }
                                    }}
                                >
                                    {button.text}
                                </MenuItem>
                            ))}
                            <Switch>
                                <Route path="/invitation/accept/">
                                    <Box marginRight="auto" display="block" />
                                </Route>
                                <Route exact path="/user">
                                    <AuthenticationButton asMenuItem />
                                    <SignupButton asMenuItem />
                                </Route>
                                <Route path="/">
                                    {user && user.attendees.length > 0 ? (
                                        <MenuItem
                                            onClick={() => {
                                                history.push("/user");
                                            }}
                                        >
                                            <FAIcon
                                                display="inline"
                                                verticalAlign="middle"
                                                iconStyle="s"
                                                icon="list"
                                                mr={2}
                                                aria-hidden={true}
                                            />
                                            <chakra.span display="inline" verticalAlign="middle">
                                                My conferences
                                            </chakra.span>
                                        </MenuItem>
                                    ) : undefined}
                                    {user && user.attendees.length > 0 ? (
                                        <Route
                                            path="/conference/:confSlug"
                                            component={(
                                                props: RouteComponentProps<{
                                                    confSlug: string;
                                                }>
                                            ) => {
                                                const attendee = user.attendees.find(
                                                    (x) => x.conference.slug === props.match.params.confSlug
                                                );
                                                return (
                                                    <MenuItem
                                                        onClick={() => {
                                                            history.push(
                                                                `/conference/${props.match.params.confSlug}/profile`
                                                            );
                                                        }}
                                                        display="block"
                                                    >
                                                        {attendee &&
                                                        attendee.profile &&
                                                        attendee.profile.photoURL_50x50 ? (
                                                            <Image
                                                                borderRadius={5}
                                                                w="100%"
                                                                h="auto"
                                                                objectFit="cover"
                                                                objectPosition="center"
                                                                src={attendee.profile.photoURL_50x50}
                                                                aria-hidden={true}
                                                                overflow="hidden"
                                                                maxW="3ex"
                                                                mr={2}
                                                                my={0}
                                                                verticalAlign="middle"
                                                                display="inline"
                                                            />
                                                        ) : (
                                                            <FAIcon
                                                                display="inline"
                                                                verticalAlign="middle"
                                                                iconStyle="s"
                                                                icon="cat"
                                                                fontSize="25px"
                                                                mr={2}
                                                                aria-hidden={true}
                                                            />
                                                        )}
                                                        <chakra.span display="inline" verticalAlign="middle">
                                                            Profile
                                                        </chakra.span>
                                                    </MenuItem>
                                                );
                                            }}
                                        />
                                    ) : undefined}
                                    <AuthenticationButton asMenuItem />
                                    <SignupButton asMenuItem />
                                </Route>
                            </Switch>
                        </MenuList>
                    </Menu>
                </>
            ) : (
                <>
                    {primaryButtons.map((button) =>
                        typeof button.action === "string" ? (
                            <LinkButton
                                key={button.key}
                                to={button.action}
                                aria-label={button.label}
                                colorScheme={button.colorScheme}
                                textAlign="center"
                                size="sm"
                                role="menuitem"
                            >
                                {button.text}
                            </LinkButton>
                        ) : (
                            <Button
                                key={button.key}
                                onClick={button.action}
                                aria-label={button.label}
                                colorScheme={button.colorScheme}
                                textAlign="center"
                                size="sm"
                                role="menuitem"
                            >
                                {button.text}
                            </Button>
                        )
                    )}
                    <Switch>
                        <Route exact path="/">
                            <Box marginRight="auto" display="block" />
                        </Route>
                        <Route path="/invitation/accept/">
                            <Box marginRight="auto" display="block" />
                        </Route>
                        <Route exact path="/user">
                            <Box marginRight="auto" display="block" />
                            <AuthenticationButton />
                            <SignupButton />
                        </Route>
                        <Route path="/">
                            <Box marginRight="auto" display="block" />
                            {user && user.attendees.length > 0 ? (
                                <LinkButton to="/user" size="sm" role="menuitem" aria-label="My conferences">
                                    <Tooltip label="My conferences">
                                        <FAIcon iconStyle="s" icon="list" aria-hidden={true} />
                                    </Tooltip>
                                </LinkButton>
                            ) : undefined}
                            {user && user.attendees.length > 0 ? (
                                <Route
                                    path="/conference/:confSlug"
                                    component={(
                                        props: RouteComponentProps<{
                                            confSlug: string;
                                        }>
                                    ) => {
                                        const attendee = user.attendees.find(
                                            (x) => x.conference.slug === props.match.params.confSlug
                                        );
                                        return (
                                            <LinkButton
                                                to={`/conference/${props.match.params.confSlug}/profile`}
                                                size="sm"
                                                role="menuitem"
                                                w="3ex"
                                                p={0}
                                                aria-label="My profile"
                                            >
                                                <Tooltip
                                                    label={`My profile${
                                                        attendee?.displayName ? ` (${attendee.displayName})` : ""
                                                    }`}
                                                >
                                                    {attendee && attendee.profile && attendee.profile.photoURL_50x50 ? (
                                                        <Image
                                                            borderRadius={5}
                                                            w="100%"
                                                            h="auto"
                                                            objectFit="cover"
                                                            objectPosition="center"
                                                            src={attendee.profile.photoURL_50x50}
                                                            aria-hidden={true}
                                                            overflow="hidden"
                                                        />
                                                    ) : (
                                                        <FAIcon
                                                            iconStyle="s"
                                                            icon="cat"
                                                            fontSize="23px"
                                                            aria-hidden={true}
                                                        />
                                                    )}
                                                </Tooltip>
                                            </LinkButton>
                                        );
                                    }}
                                />
                            ) : undefined}
                            <AuthenticationButton />
                            <SignupButton />
                        </Route>
                    </Switch>
                </>
            ),
        [history, mergeItems, primaryButtons, user]
    );

    const borderColour = useColorModeValue("gray.200", "gray.600");
    return (
        <Stack
            direction="row"
            spacing={2}
            justify="flex-start"
            align={["flex-start", "center"]}
            wrap="wrap"
            role={mergeItems ? undefined : "menu"}
            width="100%"
            gridRowGap={[0, 2]}
            flex="0 0 auto"
            mb={0}
            px="0.4em"
            py="0.4em"
            borderBottom="1px solid"
            borderBottomColor={borderColour}
        >
            {navButton}
            {homeButton}
            {primaryMenuButtons}

            <ColorModeButton />
            {chatButton}
        </Stack>
    );
}

export default function MainMenu({ children, state }: Props): JSX.Element {
    return (
        <MenuStateContext.Provider value={state}>
            <PrimaryMenuButtonsProvider>
                {children}
                <MenuBar />
            </PrimaryMenuButtonsProvider>
        </MenuStateContext.Provider>
    );
}
