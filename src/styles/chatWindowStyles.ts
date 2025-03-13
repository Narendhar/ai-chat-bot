import { Theme } from "@mui/material/styles";

export const chatWindowStyles = {
    chatWindowWrapper: {
        flex: 1,
        overflowY: "auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    loaderBox: {
        display: "flex",
        alignItems: "center",
        mt: 1
    },
    loader: {
        mr: 1
    },
    errorMessageBox: (theme: Theme) => ({
        color: theme.palette.custom.errorMessage,
        textAlign: "center",
        p: 1
    })
};
