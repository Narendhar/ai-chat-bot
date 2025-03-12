export const chatInputStyles = {
    chatInputContainer: {
        display: "flex",
        justifyContent: "center", // Centers the message container
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
            border: "none", // Remove border
            height: "36px", // Adjust height
            "& fieldset": { border: "none" }, // Ensure no border
        },
        "& .MuiInputBase-input": {
            padding: "8px", // Reduce padding for height adjustment
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
        maxWidth: isMobile ? "60%" : "100%", // Reduce width on mobile
        fontSize: isMobile ? "12px" : "14px", // Optional: Adjust font size for better readability
    }),
}
