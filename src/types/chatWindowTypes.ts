import { MessageProps } from "./chatTypes";

export interface ChatWindowProps {
    messages: MessageProps[];
    isLoading: boolean;
    errorMessage: string | null;
}
