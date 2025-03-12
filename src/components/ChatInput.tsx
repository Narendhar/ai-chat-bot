import { useState } from "react";

import { Box, TextField, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { chatInputStyles } from "../styles/chatInputStyles";

dayjs.extend(timezone);

interface ChatInputProps {
    onSendMessage: (message: string) => void;
}

/**
 * ChatInput component for sending messages in a chat interface.
 *
 * @param {Object} props - The props for the ChatInput component.
 * @param {Function} props.onSendMessage - Callback function to handle sending the message.
 * 
 * @returns {JSX.Element} The rendered ChatInput component containing input fields and buttons.
 * 
 * @throws {Error} Throws an error if onSendMessage is not a function.
 *
 * @example
 * const handleSendMessage = (message: string) => {
 *     console.log("Message sent:", message);
 * };
 *
 * <ChatInput onSendMessage={handleSendMessage} />
 */
const ChatInput = ({ onSendMessage }: ChatInputProps) => {
    const [message, setMessage] = useState("");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile resolution

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
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
