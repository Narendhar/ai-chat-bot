import { Box, CircularProgress, styled } from "@mui/material"

export const ChatWindowWrapper = styled(Box)(() => ({
    flex: 1,
    overflowY: "auto",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));

export const LoaderBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    marginTop: "8px"
}));

export const Loader = styled(CircularProgress)(() => ({
    marginRight: "8px"
}));

export const ErrorMessageBox = styled(Box)(({ theme }) => ({
    color: theme.palette.custom.errorMessage,
    textAlign: "center",
    padding: "8px"
}));