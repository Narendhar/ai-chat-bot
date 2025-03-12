import { useContext } from "react";

import { Box, Typography, Avatar } from "@mui/material";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { ThemeContext } from "../theme/ThemeProviderWrapper";

import { messageStyles } from "../styles/messageStyles";

dayjs.extend(utc);
dayjs.extend(timezone);

interface MessageProps {
    text: string;
    sender: "user" | "ai";
    timestamp: string;
}

const profilePictures = {
    user: "/src/assets/images/user.png", // Replace with actual user profile image path
    ai: "/src/assets/images/bot.png", // Replace with actual AI profile image path
};

/**
 * Message component that renders a chat message with the sender's avatar,
 * username, timestamp, and message text. It adapts its styling based on
 * the current theme (dark mode or light mode).
 *
 * @param {Object} props - The properties for the Message component.
 * @param {string} props.text - The message text content.
 * @param {string} props.sender - The identifier for the message sender (e.g., "user" or "AI").
 * @param {string} props.timestamp - The time at which the message was sent.
 *
 * @returns {JSX.Element} - A rendered message component displaying the sender's avatar,
 *                          username, timestamp, and the message text.
 *
 * @throws {Error} - Throws an error if the sender is not recognized (not "user" or "AI").
 */
const Message = ({ text, sender, timestamp }: MessageProps) => {
    const { isDarkMode } = useContext(ThemeContext);
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
                    <Box sx={messageStyles.messageBox(isDarkMode)}>
                        <Typography variant="body1">{text}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Message;
