import { useEffect, useRef } from "react";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { Typography } from "@mui/material";

import Message from "./Message";

import { ChatWindowProps } from "../types/chatWindowTypes";

import { ChatWindowWrapper, ErrorMessageBox, Loader, LoaderBox } from "../styles/chatWindowStyles";

dayjs.extend(timezone);

/**
 * ChatWindow component that renders a chat interface displaying a list of messages. 
 * @param {Array<{ id: string; text: string; sender: string; timestamp: string }>} messages - An array of message objects to be displayed in the chat window.
 * @returns {JSX.Element}
 */
const ChatWindow = ({ messages, isLoading, errorMessage }: ChatWindowProps) => {

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const messageCount = messages.length;
        if (chatContainerRef.current && messages[messageCount - 2].sender === "user") {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <ChatWindowWrapper ref={chatContainerRef}>
            {messages.map((msg) => (
                <Message id={msg.id ? msg.id + Math.random() : Math.random()} key={msg.id ? msg.id + Math.random() : Math.random()} text={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
            ))}

            {isLoading && (
                <LoaderBox>
                    <Loader size={20} />
                    <Typography variant="body2" color="text.secondary">AI is typing...</Typography>
                </LoaderBox>
            )}

            {errorMessage && (
                <ErrorMessageBox>
                    <Typography variant="caption">{errorMessage}</Typography>
                </ErrorMessageBox>
            )}
        </ChatWindowWrapper>
    );
}

export default ChatWindow;
