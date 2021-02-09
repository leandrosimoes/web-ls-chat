import { IBodyProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Body extends BaseComponent {
    private props;
    private typingIndicator;
    constructor(props: IBodyProps);
    private setupEmptyMessages;
    setMessages: (messages: ILsChatMessage[]) => void;
    setIsLoading: (isLoading?: boolean) => void;
    setIsTyping: (isTyping?: boolean) => void;
    render: (container: HTMLElement) => void;
}
