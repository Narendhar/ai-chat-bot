import { useContext, useState } from "react";
import { AppBar, Toolbar, IconButton, useTheme } from "@mui/material";
import { ThemeContext } from "../theme/ThemeProviderWrapper";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { headerStyles } from "./HeaderStyles";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseToggle = () => {
        setIsCollapsed(prev => !prev);
    };
    const theme = useTheme();

    return (
        <AppBar position="static" sx={headerStyles.appBar(theme)}>
            <Toolbar>
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
                    sx={headerStyles.userAvatarButton}
                >
                    <span
                        style={headerStyles.onlineStatus as React.CSSProperties}
                    />
                </IconButton>
            </Toolbar>
        </AppBar >
    );
};

export default Header;

