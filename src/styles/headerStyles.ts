import { styled } from "@mui/material/styles";
import { AppBar, IconButton, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const HeaderAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.appBar.background
}));

export const HeaderIconButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "isDarkMode",
})<{ isDarkMode?: boolean }>(({ theme, isDarkMode }) => ({
    "&:hover": { backgroundColor: isDarkMode ? "transparent" : theme.palette.iconButton.hoverBackground },
    backgroundColor: isDarkMode ? "none" : theme.palette.iconButton.hoverBackground,
}));

export const ThemeLightModeIcon = styled(LightModeIcon)(({ theme }) => ({
    color: theme.palette.custom.textDark,
    stroke: theme.palette.custom.lightModeIconStroke,
    strokeWidth: 1,
}));

export const ThemeDarkModeIcon = styled(DarkModeIcon)(({ theme }) => ({
    color: theme.palette.custom.darkModeIconColor,
    stroke: theme.palette.custom.darkModeIconStroke,
    strokeWidth: 1,
}));

export const HeaderMenuButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
    marginLeft: isMobile ? "" : "auto",
    border: isMobile ? "0px" : `1px solid ${theme.palette.iconButton.border}`,
    color: theme.palette.custom.darkModeIconColor,
    stroke: theme.palette.custom.darkModeIconStroke,
    strokeWidth: 1,
    "&:hover": {
        border: `1px solid ${theme.palette.iconButton.border}`,
        backgroundColor: "transparent",
    },
}));

export const HeaderSettingsButton = styled(IconButton)(({ theme }) => ({
    marginLeft: "8px",
    border: `1px solid ${theme.palette.iconButton.border}`,
    color: theme.palette.custom.darkModeIconColor,
    stroke: theme.palette.custom.darkModeIconStroke,
    strokeWidth: 1,
    "&:hover": {
        border: `1px solid ${theme.palette.iconButton.border}`,
        backgroundColor: "transparent",
    },
}));

export const UserAvatarButton = styled(IconButton)(({ theme }) => ({
    marginLeft: "8px",
    position: "relative",
    border: `1px solid ${theme.palette.custom.textDark}`,
    backgroundImage: `url('/src/assets/images/user.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: 42,
    height: 42,
    borderRadius: "50%",
    "&:hover": {
        border: `1px solid ${theme.palette.custom.textDark}`,
        backgroundColor: "transparent",
    },
}));

export const OnlineStatus = styled("span")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.custom.textDark}`,
}));

export const SideMenuDrawer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
    gap: "16px",
    width: 60,
}));
