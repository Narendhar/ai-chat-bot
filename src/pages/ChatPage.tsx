import { useCallback, useRef, useState } from "react";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { throttle } from "lodash";

import ChatInput from "../components/ChatInput";
import ChatWindow from "../components/ChatWindow";
import Header from "../components/Header";

import { getISTTime } from "../utils/timeUtils";

import { Message } from "../types/messageTypes";

import { ChatLayout } from "../styles/chatLayoutStyles";

/**
 * ChatPage component that renders a chat interface with messages exchanged between a user and an AI.
 * @returns {JSX.Element} 
 */
const ChatPage = () => {

    const theme = useTheme();
    const initialMessages: Message[] = [
        { id: 1, text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?", sender: "user", timestamp: getISTTime() },
        { id: 2, text: "Hi! How can I assist you?", sender: "ai", timestamp: getISTTime() },
        { id: 3, text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary?", sender: "user", timestamp: getISTTime() },
        { id: 4, text: "Sure! What specifically?", sender: "ai", timestamp: getISTTime() }
    ];
    const [messages, setMessages] = useState<Message[]>(initialMessages);

    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const controllerRef = useRef<AbortController | null>(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiURL = import.meta.env.VITE_API_URL;

    /**
     * Handles sending a message in the chat.
     * @param {string} message - The message text to be sent by the user.
     * @returns {void}
     */
    const handleSendMessage = useCallback(async (message: string) => {
        console.log("Message sent:", message, "at", new Date().toISOString());
        if (!message.trim()) return;

        setErrorMessage(null);
        setIsStreaming(true);
        setChatHistory(prev => [...prev, `User: ${message}`]);

        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        const userMessage: Message = {
            id: messages.length + 1,
            text: message,
            sender: "user",
            timestamp: getISTTime(),
        };

        const aiMessage: Message = {
            id: messages.length + 2,
            text: "",
            sender: "ai",
            timestamp: getISTTime(),
        };

        setMessages(prev => [...prev, userMessage, aiMessage]);

        controllerRef.current = new AbortController();
        const signal = controllerRef.current.signal;

        try {
            const response = await fetch(`${apiURL}?prompt=${encodeURIComponent(message)}`, {
                method: "GET",
                headers: { "x-api-key": apiKey },
                signal,
            });

            if (!response.ok) throw new Error(`API Error: ${response.status} ${response.statusText}`);
            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let accumulatedText = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    setIsStreaming(false);
                    break;
                }

                const chunk = decoder.decode(value, { stream: true });

                chunk.split("\n").forEach(line => {
                    if (!line.startsWith("data: ")) return;

                    try {
                        const json = JSON.parse(line.substring(5).trim());
                        const deltaContent = json.choices?.[0]?.delta?.content || "";

                        if (deltaContent) {
                            accumulatedText += deltaContent;
                            setMessages(prev =>
                                prev.map(msg =>
                                    msg.id === aiMessage.id ? { ...msg, text: accumulatedText } : msg
                                )
                            );
                        }
                    } catch (error) {
                        console.error("JSON parse error:", error);
                    }
                });
            }
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                console.log("Request was aborted:", error);
            }
            else {
                console.error("Streaming error:", error);
                setErrorMessage("Failed to get a response. Please try again.");
                setIsStreaming(false);
            }
        }
    }, [messages]);

    const throttledSendMessage = useRef(
        throttle((message: string) => handleSendMessage(message), 5000, { leading: true, trailing: false })
    ).current;

    return (
        <ChatLayout>
            <Header />
            <ChatWindow messages={messages} isLoading={isStreaming} errorMessage={errorMessage} />
            <ChatInput onSendMessage={throttledSendMessage} />
        </ChatLayout>
    );
};

export default ChatPage;
