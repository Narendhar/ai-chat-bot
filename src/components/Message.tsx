import { Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

import { MessageProps } from "../types/chatTypes";

import { MessageAvatar, MessageBox, MessageContainer, MessageContent, MessageWrapper, UsernameTimestampRow } from "../styles/messageStyles";

const profilePictures = {
    user: "/src/assets/images/user.png",
    ai: "/src/assets/images/bot.png",
};

/**
 * Message component that renders a chat message with the sender's avatar,
 * username, timestamp, and message text.
 * @param {string} text - The message text content
 * @param {string} sender - The identifier for the message sender
 * @param {string} timestamp - The time at which the message was sent
 *
 * @returns {JSX.Element}
 */
const Message = ({ text, sender, timestamp }: MessageProps) => {
    return (
        <MessageContainer>
            <MessageWrapper>
                <MessageAvatar src={profilePictures[sender]} />
                <MessageContent>
                    <UsernameTimestampRow>
                        <Typography variant="caption" fontWeight="bold">
                            {sender === "user" ? "You" : "AI"}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {timestamp}
                        </Typography>
                    </UsernameTimestampRow>
                    <MessageBox>
                        {sender === "ai" ? (
                            <ReactMarkdown>{text}</ReactMarkdown>
                        ) : (
                            text
                        )}
                    </MessageBox>
                </MessageContent>
            </MessageWrapper>
        </MessageContainer>
    );
}

export default Message;
