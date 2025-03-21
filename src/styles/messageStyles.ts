import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";

export const MessageContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
}));

export const MessageWrapper = styled(Box)(() => ({
    display: "flex",
    alignItems: "flex-start",
    width: "90%",
    marginBottom: "25px",
    overflowX: "auto"
}));

export const MessageAvatar = styled(Avatar)(() => ({
    marginRight: "8px",
    width: 45,
    height: 45,
}));

export const MessageContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
}));

export const UsernameTimestampRow = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
}));

export const MessageBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.custom.messageBackground,
    color: theme.palette.custom.textDark,
    borderRadius: 8,
    padding: "8px 8px",
    maxWidth: "100%",
    overflowX: "auto",
    "& p": {
        margin: 0,
    },
}));
