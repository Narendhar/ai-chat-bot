import { Theme } from "@mui/material/styles";

export const messageStyles = {
    messageContainer: {
        display: "flex",
        justifyContent: "center", // Centers the message container
        width: "100%",
    },
    messageWrapper: {
        display: "flex",
        alignItems: "flex-start",
        width: "90%", // Controls chat width
        marginBottom: "25px",
    },

    avatarStyle: {
        mr: 1,
        width: 45,
        height: 45,
    },
    messageContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
    },

    usernameTimestampRow: {
        display: "flex",
        alignItems: "center",
        gap: 1,
    },

    messageBox: (theme: Theme) => ({
        backgroundColor: theme.palette.custom.messageBackground,
        color: theme.palette.custom.textDark,
        borderRadius: 2,
        padding: 1,
        maxWidth: "100%",
    }),

    messageBoxContent: {
        whiteSpace: "pre-line"
    }
}
