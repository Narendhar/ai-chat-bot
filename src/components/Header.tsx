import { useContext, useState } from "react";

import { AppBar, Toolbar, IconButton, useTheme, useMediaQuery, Box } from "@mui/material";
import { Drawer } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from '@mui/icons-material/Settings';

import { ThemeContext } from "../theme/ThemeProviderWrapper";

import { headerStyles } from "../styles/headerStyles";


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
        <AppBar position="static" sx={headerStyles.appBar(theme)}>
            <Toolbar>
                {isMobile ? (
                    <IconButton
                        onClick={handleCollapseToggle}
                        color="primary"
                        sx={headerStyles.menuButton(theme, isMobile)}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : <>
                    <IconButton
                        onClick={isDarkMode ? () => toggleTheme(false) : undefined}
                        color={isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.iconButton(theme, isDarkMode)}
                    >
                        <LightModeIcon sx={headerStyles.lightModeIcon(theme)} />
                    </IconButton>

                    <IconButton
                        onClick={!isDarkMode ? () => toggleTheme(true) : undefined}
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.iconButton(theme, !isDarkMode)}
                    >
                        <DarkModeIcon sx={headerStyles.darkModeIcon(theme)} />
                    </IconButton>

                    <IconButton
                        onClick={handleCollapseToggle}
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.menuButton(theme, isMobile)}
                    >
                        <MenuIcon />
                    </IconButton>

                    < IconButton
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.settingsButton(theme)}
                    >
                        <SettingsIcon />
                    </IconButton >

                    <IconButton
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.userAvatarButton(theme)}
                    >
                        <span
                            style={headerStyles.onlineStatus(theme) as React.CSSProperties}
                        />
                    </IconButton>
                </>
                }
                <Drawer anchor="left" open={isCollapsed} onClose={handleCollapseToggle}>
                    <Box
                        sx={headerStyles.drawer}
                    >
                        <IconButton
                            onClick={isDarkMode ? () => toggleTheme(false) : undefined}
                            color={isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.iconButton(theme, isDarkMode)}
                        >
                            <LightModeIcon sx={headerStyles.lightModeIcon(theme)} />
                        </IconButton>

                        <IconButton
                            onClick={!isDarkMode ? () => toggleTheme(true) : undefined}
                            color={!isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.iconButton(theme, !isDarkMode)}
                        >
                            <DarkModeIcon sx={headerStyles.darkModeIcon(theme)} />
                        </IconButton>

                        <IconButton
                            color={!isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.settingsButton(theme)}
                        >
                            <SettingsIcon />
                        </IconButton>

                        <IconButton
                            color={!isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.userAvatarButton}
                        >
                            <span
                                style={headerStyles.onlineStatus(theme) as React.CSSProperties}
                            />
                        </IconButton>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar >
    );
}

export default Header;

