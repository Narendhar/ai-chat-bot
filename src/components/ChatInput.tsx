import { useState } from "react";

import { Box, TextField, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { ChatInputProps } from "../types/chatInputTypes";

import { chatInputStyles } from "../styles/chatInputStyles";

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
            <Box sx={chatInputStyles.chatInputContainer}>
                <Box sx={chatInputStyles.chatBox}>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        sx={chatInputStyles.textField}
                    />

                    <IconButton>
                        <MicNoneIcon />
                    </IconButton>

                    <IconButton color="primary" onClick={handleSend} sx={chatInputStyles.sendButton}>
                        <ArrowUpwardIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" textAlign="center">
                <Typography variant="body2" color="text.secondary" sx={chatInputStyles.footerText(isMobile)}>
                    AI can make mistakes. Check our Terms & Conditions.
                </Typography >
            </Box >
        </>
    );
}

export default ChatInput;
