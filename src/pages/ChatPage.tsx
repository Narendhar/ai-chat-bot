import { useContext, useState } from "react";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";
import Header from "../components/Header";

import { ThemeContext } from "../theme/ThemeProviderWrapper";

import { chatLayoutStyles } from "../styles/chatLayoutStyles";


dayjs.extend(timezone);

interface Message {
    id: number;
    text: string;
    sender: "user" | "ai";
    timestamp: string;
}

/**
 * ChatPage component that renders a chat interface with messages exchanged between a user and an AI.
 * 
 * This component manages the state of chat messages and handles the sending of messages. 
 * It retrieves the current time in Indian Standard Time (IST) and updates the messages list 
 * with user input and simulated AI responses.
 *
 * @component
 * 
 * @returns {JSX.Element} The rendered chat page including the header, chat window, and input for sending messages.
 * 
 * @throws {Error} Will throw an error if dayjs fails to retrieve the timezone or format the time.
 */
const ChatPage = () => {

    const theme = useTheme();
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?", sender: "user", timestamp: getISTTime() },
        { id: 2, text: "Hi! How can I assist you?", sender: "ai", timestamp: getISTTime() },
        { id: 3, text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary?", sender: "user", timestamp: getISTTime() },
        { id: 4, text: "Sure! What specifically?", sender: "ai", timestamp: getISTTime() },
        { id: 5, text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?", sender: "user", timestamp: getISTTime() },
        { id: 6, text: "Hi! How can I assist you?", sender: "ai", timestamp: getISTTime() },
        { id: 7, text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary?", sender: "user", timestamp: getISTTime() },
        { id: 8, text: "Sure! What specifically?", sender: "ai", timestamp: getISTTime() }
    ]);

    /**
     * Handles sending a message in the chat.
     *
     * This function creates a message object for the user and a simulated AI response, 
     * then updates the messages state with both messages.
     *
     * @param {string} message - The message text to be sent by the user.
     * 
     * @returns {void}
     * 
     * @throws {Error} Will throw an error if message is not a string or if the messages state is corrupted.
     */
    const handleSendMessage = (message: string) => {
        const userMessage: Message = {
            id: messages.length + 1,
            text: message,
            sender: "user",
            timestamp: getISTTime(),
        };

        const aiResponse: Message = {
            id: messages.length + 2,
            text: "I'm here to help! 😊", // Simulating AI response
            sender: "ai",
            timestamp: getISTTime(),
        };

        setMessages([...messages, userMessage, aiResponse]);
    };

    /**
     * Retrieves the current time in Indian Standard Time (IST).
     *
     * This function uses the dayjs library to get the current time and formats it 
     * in a 12-hour clock format (hh:mm AM/PM).
     *
     * @returns {string} The current time in IST formatted as "hh:mm A".
     * 
     * @throws {Error} Will throw an error if there is an issue with timezone retrieval or formatting.
     */
    function getISTTime() {
        return dayjs().tz("Asia/Kolkata").format("hh:mm A"); // Get IST time in hh:mm AM/PM format
    }

    return (
        <Box sx={chatLayoutStyles(isDarkMode)}>
            <Header />
            <ChatWindow messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </Box >
    );
};

export default ChatPage;
