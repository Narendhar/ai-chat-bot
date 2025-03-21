import { Box, IconButton, styled, TextField, Typography } from "@mui/material"

export const ChatInputContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
}));

export const ChatBox = styled(Box)(() => ({
    display: "flex",
    padding: "8px",
    border: "1px solid grey",
    borderRadius: "50px",
    width: "86%",
    alignItems: "center",
}));

export const ChatTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        border: "none",
        height: "36px",
        "& fieldset": { border: "none" },
    },
    "& .MuiInputBase-input": {
        padding: "8px",
    },
}));

export const SendButton = styled(IconButton)(() => ({
    borderRadius: "50%",
    backgroundColor: "blue",
    color: "white",
    padding: "8px",
    "&:hover": {
        backgroundColor: "darkblue",
    },
}));

export const FooterText = styled(Typography, {
    shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ isMobile }) => ({
    marginTop: 1,
    maxWidth: isMobile ? "60%" : "100%",
    fontSize: isMobile ? "12px" : "14px",
}));
