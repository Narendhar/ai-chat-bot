import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { Box } from "@mui/material";

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
const ChatWindow = ({ messages }: ChatWindowProps) => {
    return (
        <Box sx={chatWindowStyles}>
            {messages.map((msg) => (
                <Message key={msg.id} text={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
            ))}
        </Box>
    );
}

export default ChatWindow;
