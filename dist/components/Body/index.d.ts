import { IBodyProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Body extends BaseComponent {
    private props;
    private typingIndicator;
    private controls;
    constructor(props: IBodyProps);
    private setupEmptyMessages;
    setMessages: (messages: ILsChatMessage[]) => void;
    setIsLoading: (isLoading?: boolean) => void;
    setIsTyping: (isTyping?: boolean) => void;
    private deleteMessage;
    private handleActionButtonPress;
    selectMessage: (message?: ILsChatMessage) => void;
    render: (container: HTMLElement) => void;
}
