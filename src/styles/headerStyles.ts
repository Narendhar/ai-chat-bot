import { Theme } from "@mui/material/styles";

export const headerStyles = {
    appBar: (theme: Theme) => ({
        backgroundColor: theme.palette.appBar.background,
    }),
    iconButton: (theme: Theme, isDarkMode: boolean) => ({
        "&:hover": { backgroundColor: isDarkMode ? "transparent" : theme.palette.iconButton.hoverBackground },
        backgroundColor: isDarkMode ? "none" : theme.palette.iconButton.hoverBackground,
    }),
    lightModeIcon: (theme: Theme) => ({
        color: theme.palette.custom.textDark,
        stroke: theme.palette.custom.lightModeIconStroke,
        strokeWidth: 1,
    }),
    darkModeIcon: (theme: Theme) => ({
        color: theme.palette.custom.darkModeIconColor,
        stroke: theme.palette.custom.darkModeIconStroke,
        strokeWidth: 1,
    }),
    menuButton: (theme: Theme, isMobile: boolean = false) => ({
        ml: isMobile ? "" : "auto",
        border: isMobile ? "0px" : `1px solid ${theme.palette.iconButton.border}`,
        ...headerStyles.darkModeIcon(theme),
        "&:hover": {
            border: `1px solid ${theme.palette.iconButton.border}`,
            backgroundColor: "transparent",
        },
    }),
    settingsButton: (theme: Theme) => ({
        ml: 1,
        border: `1px solid ${theme.palette.iconButton.border}`,
        ...headerStyles.darkModeIcon(theme),
        "&:hover": {
            border: `1px solid ${theme.palette.iconButton.border}`,
            backgroundColor: "transparent",
        },
    }),
    userAvatarButton: (theme: Theme) => ({
        ml: 1,
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
    }),
    onlineStatus: (theme: Theme) => ({
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        backgroundColor: "green",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.custom.textDark}`,
    }),
};
