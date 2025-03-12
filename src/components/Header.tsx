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
 * 
 * This component utilizes the context for theme management and handles the collapse state
 * for mobile view. It displays different buttons based on whether the application is in dark mode,
 * and provides functionalities to toggle the theme and open a drawer for additional options.
 * 
 * @returns {JSX.Element} The rendered header component containing the AppBar, Toolbar, and buttons.
 * 
 * @throws {Error} Throws an error if the ThemeContext is not available in the component tree.
 * 
 * @example
 * // Usage within a parent component
 * const App = () => {
 *   return (
 *     <ThemeProvider>
 *       <Header />
 *     </ThemeProvider>
 *   );
 * };
 */
const Header = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile resolution

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
                        sx={headerStyles.menuButton(isDarkMode, isMobile)}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : <>
                    <IconButton
                        onClick={isDarkMode ? () => toggleTheme(false) : undefined}
                        color={isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.iconButton(theme, isDarkMode)}
                    >
                        <LightModeIcon sx={headerStyles.lightModeIcon(isDarkMode)} />
                    </IconButton>

                    <IconButton
                        onClick={!isDarkMode ? () => toggleTheme(true) : undefined}
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.iconButton(theme, !isDarkMode)}
                    >
                        <DarkModeIcon sx={headerStyles.darkModeIcon(isDarkMode)} />
                    </IconButton>

                    <IconButton
                        onClick={handleCollapseToggle}
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.menuButton(isDarkMode)}
                    >
                        <MenuIcon />
                    </IconButton>

                    < IconButton
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.settingsButton(isDarkMode)}
                    >
                        <SettingsIcon />
                    </IconButton >

                    <IconButton
                        color={!isDarkMode ? "primary" : "inherit"}
                        sx={headerStyles.userAvatarButton(isDarkMode)}
                    >
                        <span
                            style={headerStyles.onlineStatus as React.CSSProperties}
                        />
                    </IconButton>
                </>
                }
                <Drawer anchor="left" open={isCollapsed} onClose={handleCollapseToggle}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Centers items horizontally
                            padding: 2,
                            gap: 2, // Adds space between buttons
                            width: 60, // Adjust width for a balanced layout
                        }}
                    >
                        <IconButton
                            onClick={isDarkMode ? () => toggleTheme(false) : undefined}
                            color={isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.iconButton(theme, isDarkMode)}
                        >
                            <LightModeIcon sx={headerStyles.lightModeIcon(isDarkMode)} />
                        </IconButton>

                        <IconButton
                            onClick={!isDarkMode ? () => toggleTheme(true) : undefined}
                            color={!isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.iconButton(theme, !isDarkMode)}
                        >
                            <DarkModeIcon sx={headerStyles.darkModeIcon(isDarkMode)} />
                        </IconButton>

                        <IconButton
                            color={!isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.settingsButton(isDarkMode)}
                        >
                            <SettingsIcon />
                        </IconButton>

                        <IconButton
                            color={!isDarkMode ? "primary" : "inherit"}
                            sx={headerStyles.userAvatarButton(isDarkMode)}
                        >
                            <span
                                style={headerStyles.onlineStatus as React.CSSProperties}
                            />
                        </IconButton>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar >
    );
}

export default Header;

