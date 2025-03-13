export const chatInputStyles = {
    chatInputContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },

    chatBox: {
        display: "flex",
        padding: 1,
        border: "1px solid grey",
        borderRadius: "50px",
        width: "86%",
        alignItems: "center",
    },

    textField: {
        "& .MuiOutlinedInput-root": {
            border: "none",
            height: "36px",
            "& fieldset": { border: "none" },
        },
        "& .MuiInputBase-input": {
            padding: "8px",
        },
    },

    sendButton: {
        borderRadius: "50%",
        backgroundColor: "blue",
        color: "white",
        padding: 1,
        "&:hover": {
            backgroundColor: "darkblue",
        },
    },

    footerText: (isMobile: boolean) => ({
        marginTop: 1,
        maxWidth: isMobile ? "60%" : "100%",
        fontSize: isMobile ? "12px" : "14px",
    }),
}
