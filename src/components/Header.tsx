import { useContext, useState } from "react";

import { Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from '@mui/icons-material/Settings';

import { ThemeContext } from "../theme/ThemeProviderWrapper";

import { HeaderAppBar, HeaderIconButton, HeaderMenuButton, HeaderSettingsButton, OnlineStatus, SideMenuDrawer, ThemeDarkModeIcon, ThemeLightModeIcon, UserAvatarButton } from "../styles/headerStyles";


/**
 * Header component that renders an application header with theme toggling and navigation options.
 * @returns {JSX.Element}
 */
const Header = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleCollapseToggle = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <HeaderAppBar position="static">
            <Toolbar>
                {isMobile ? (
                    <HeaderMenuButton
                        onClick={handleCollapseToggle}
                        color="primary"
                        isMobile={isMobile}
                    >
                        <MenuIcon />
                    </HeaderMenuButton>
                ) : <>
                    <HeaderIconButton
                        onClick={isDarkMode ? () => toggleTheme(false) : undefined}
                        color={isDarkMode ? "primary" : "inherit"}
                        isDarkMode={isDarkMode}
                    >
                        <ThemeLightModeIcon />
                    </HeaderIconButton>

                    <HeaderIconButton
                        onClick={!isDarkMode ? () => toggleTheme(true) : undefined}
                        color={!isDarkMode ? "primary" : "inherit"}
                        isDarkMode={!isDarkMode}
                    >
                        <ThemeDarkModeIcon />
                    </HeaderIconButton>

                    <HeaderMenuButton
                        onClick={handleCollapseToggle}
                        color={!isDarkMode ? "primary" : "inherit"}
                        isMobile={isMobile}
                    >
                        <MenuIcon />
                    </HeaderMenuButton>

                    < HeaderSettingsButton
                        color={!isDarkMode ? "primary" : "inherit"}
                    >
                        <SettingsIcon />
                    </HeaderSettingsButton >

                    <UserAvatarButton
                        color={!isDarkMode ? "primary" : "inherit"}
                    >
                        <OnlineStatus />
                    </UserAvatarButton>
                </>
                }
                <Drawer anchor="left" open={isCollapsed} onClose={handleCollapseToggle}>
                    <SideMenuDrawer>
                        <HeaderIconButton
                            onClick={isDarkMode ? () => toggleTheme(false) : undefined}
                            color={isDarkMode ? "primary" : "inherit"}
                            isDarkMode={isDarkMode}
                        >
                            <ThemeLightModeIcon />
                        </HeaderIconButton>

                        <HeaderIconButton
                            onClick={!isDarkMode ? () => toggleTheme(true) : undefined}
                            color={!isDarkMode ? "primary" : "inherit"}
                            isDarkMode={!isDarkMode}
                        >
                            <ThemeDarkModeIcon />
                        </HeaderIconButton>

                        <HeaderSettingsButton
                            color={!isDarkMode ? "primary" : "inherit"}
                        >
                            <SettingsIcon />
                        </HeaderSettingsButton>

                        <UserAvatarButton
                            color={!isDarkMode ? "primary" : "inherit"}
                        >
                            <OnlineStatus />
                        </UserAvatarButton>
                    </SideMenuDrawer>
                </Drawer>
            </Toolbar>
        </HeaderAppBar >
    );
}

export default Header;

