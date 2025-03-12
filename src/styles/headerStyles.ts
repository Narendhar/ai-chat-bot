import { Theme } from "@mui/material/styles";

export const headerStyles = {
    appBar: (theme: Theme) => ({
        backgroundColor: theme.palette.appBar.background,
    }),
    iconButton: (theme: Theme, isDarkMode: boolean) => ({
        "&:hover": { backgroundColor: isDarkMode ? "transparent" : theme.palette.iconButton.hoverBackground },
        backgroundColor: isDarkMode ? "none" : theme.palette.iconButton.hoverBackground,
    }),
    lightModeIcon: (isDarkMode: boolean) => ({
        color: isDarkMode ? "white" : "grey.900",
        stroke: isDarkMode ? "black" : "transparent",
        strokeWidth: 1,
    }),
    darkModeIcon: (isDarkMode: boolean) => ({
        color: "transparent",
        stroke: isDarkMode ? "white" : "black",
        strokeWidth: 1,
    }),
    menuButton: (isDarkMode: boolean, isMobile: boolean = false) => ({
        ml: isMobile ? "" : "auto",
        border: isMobile ? "0px" : isDarkMode ? "1px solid white" : "1px solid black",
        ...headerStyles.darkModeIcon(isDarkMode),
        "&:hover": {
            border: "1px solid black",
            backgroundColor: "transparent",
        },
    }),
    settingsButton: (isDarkMode: boolean) => ({
        ml: 1,
        border: isDarkMode ? "1px solid white" : "1px solid black",
        ...headerStyles.darkModeIcon(isDarkMode),
        "&:hover": {
            border: "1px solid black",
            backgroundColor: "transparent",
        },
    }),
    userAvatarButton: (isDarkMode: boolean) => ({
        ml: 1,
        position: "relative",
        border: isDarkMode ? "1px solid white" : "1px solid black",
        backgroundImage: `url('/src/assets/images/user.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: 42,
        height: 42,
        borderRadius: "50%",
        "&:hover": {
            border: "1px solid black",
            backgroundColor: "transparent",
        },
    }),
    onlineStatus: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        backgroundColor: "green",
        borderRadius: "50%",
        border: "2px solid white",
    },
};
