import Header from "../components/Header";
import { Box } from "@mui/material";

const ChatPage = () => {
    return (
        <Box
            sx={{
                width: "100vw", // Full viewport width
                height: "100vh", // Full viewport height
                display: "flex",
                flexDirection: "column",
                backgroundColor: "background.default", // Uses MUI theme background color
            }}
        >
            <Header />
            <h2>Welcome to AI Chat</h2>
        </Box>
    );
};

export default ChatPage;
