import { useState } from "react";

import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { ChatInputProps } from "../types/chatInputTypes";

import { ChatInputContainer, ChatBox, ChatTextField, SendButton, FooterText } from "../styles/chatInputStyles";

/**
 * ChatInput component for sending messages in a chat interface.
 * @param {Function} onSendMessage - Callback function to handle sending the message.
 * @returns {JSX.Element} 
 */
const ChatInput = ({ onSendMessage }: ChatInputProps) => {
    const [message, setMessage] = useState("");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleSend = async () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <ChatInputContainer>
                <ChatBox>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <ChatTextField
                        fullWidth
                        variant="outlined"
                        placeholder="Message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />

                    <IconButton>
                        <MicNoneIcon />
                    </IconButton>

                    <SendButton color="primary" onClick={handleSend}>
                        <ArrowUpwardIcon />
                    </SendButton>
                </ChatBox>
            </ChatInputContainer>

            <Box display="flex" justifyContent="center" textAlign="center">
                <FooterText variant="body2" color="text.secondary" isMobile={isMobile}>
                    AI can make mistakes. Check our Terms & Conditions.
                </FooterText >
            </Box >
        </>
    );
}

export default ChatInput;
