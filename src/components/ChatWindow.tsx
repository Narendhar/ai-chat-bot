import { useEffect, useRef } from "react";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

import Message from "./Message";

import { chatWindowStyles } from "../styles/chatWindowStyles";

dayjs.extend(timezone);

// Define a type for messages
interface Message {
    id: number;
    text: string;
    sender: "user" | "ai"; // Restrict sender to only "user" or "ai"
    timestamp: string;
}

interface ChatWindowProps {
    messages: Message[];
    isLoading: boolean;
    errorMessage: string | null;
}

/**
 * ChatWindow component that renders a chat interface displaying a list of messages.
 *
 * @param {ChatWindowProps} props - The properties for the ChatWindow component.
 * @param {Array<{ id: string; text: string; sender: string; timestamp: string }>} props.messages - An array of message objects to be displayed in the chat window.
 * Each message object should contain an `id`, `text`, `sender`, and `timestamp`.
 *
 * @returns {JSX.Element} A JSX element representing the chat window containing the list of messages.
 *
 * @throws {Error} May throw an error if the messages prop is not an array or if any message does not contain the required fields.
 */
const ChatWindow = ({ messages, isLoading, errorMessage }: ChatWindowProps) => {

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]); // Runs whenever messages update

    return (
        <Box sx={chatWindowStyles.chatWindowWrapper} ref={chatContainerRef}>
            {messages.map((msg) => (
                <Message key={msg.id + Math.random()} text={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
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
