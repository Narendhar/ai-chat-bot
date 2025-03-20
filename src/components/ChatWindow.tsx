import { useEffect, useRef } from "react";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

import Message from "./Message";

import { ChatWindowProps } from "../types/chatWindowTypes";

import { chatWindowStyles } from "../styles/chatWindowStyles";

dayjs.extend(timezone);

/**
 * ChatWindow component that renders a chat interface displaying a list of messages. 
 * @param {Array<{ id: string; text: string; sender: string; timestamp: string }>} messages - An array of message objects to be displayed in the chat window.
 * @returns {JSX.Element}
 */
const ChatWindow = ({ messages, isLoading, errorMessage }: ChatWindowProps) => {

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    useEffect(() => {
        const messageCount = messages.length;
        if (chatContainerRef.current && messages[messageCount - 2].sender === "user") {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <Box sx={chatWindowStyles.chatWindowWrapper} ref={chatContainerRef}>
            {messages.map((msg) => (
                <Message id={msg.id ? msg.id + Math.random() : Math.random()} key={msg.id ? msg.id + Math.random() : Math.random()} text={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
            ))}

            {isLoading && (
                <Box sx={chatWindowStyles.loaderBox}>
                    <CircularProgress size={20} sx={chatWindowStyles.loader} />
                    <Typography variant="body2" color="text.secondary">AI is typing...</Typography>
                </Box>
            )}

            {errorMessage && (
                <Box sx={chatWindowStyles.errorMessageBox(theme)}>
                    <Typography variant="caption">{errorMessage}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default ChatWindow;
