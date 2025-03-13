import { Theme } from "@mui/material/styles";

export const chatLayoutStyles = (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    paddingBottom: "16px",
    backgroundColor: theme.palette.background.default
})