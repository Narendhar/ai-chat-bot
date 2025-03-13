import { Box, Typography, Avatar, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";

import { MessageProps } from "../types/chatTypes";

import { messageStyles } from "../styles/messageStyles";

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
    const theme = useTheme();

    return (
        <Box sx={messageStyles.messageContainer}>
            <Box sx={messageStyles.messageWrapper}>
                <Avatar src={profilePictures[sender]} sx={messageStyles.avatarStyle} />
                <Box sx={messageStyles.messageContent}>
                    <Box sx={messageStyles.usernameTimestampRow}>
                        <Typography variant="caption" fontWeight="bold">
                            {sender === "user" ? "You" : "AI"}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {timestamp}
                        </Typography>
                    </Box>
                    <Box sx={messageStyles.messageBox(theme)}>
                        {sender === "ai" ? (
                            <ReactMarkdown>{text}</ReactMarkdown>
                        ) : (
                            text
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Message;
