export interface MessageProps {
    id: number,
    text: string;
    sender: "user" | "ai";
    timestamp: string;
}
