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

    messageBox: (isDarkMode: boolean) => ({
        backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.11)" : "rgba(0, 123, 255, 0.04)",
        color: isDarkMode ? "white" : "grey.900",
        borderRadius: 2,
        padding: 1,
        maxWidth: "100%",
    })
}
