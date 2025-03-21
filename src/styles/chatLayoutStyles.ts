import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ChatLayout = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    paddingBottom: "16px",
    backgroundColor: theme.palette.background.default
}));