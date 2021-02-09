import { IBodyProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Body extends BaseComponent {
    private props;
    private typingIndicator;
    private controls;
    private replyingMessage?;
    constructor(props: IBodyProps);
    private setupEmptyMessages;
    setMessages: (messages: ILsChatMessage[]) => void;
    setIsLoading: (isLoading?: boolean) => void;
    setIsTyping: (isTyping?: boolean) => void;
    private setReplyingMessage;
    private deleteMessage;
    private handleActionButtonPress;
    selectMessage: (message?: ILsChatMessage) => void;
    render: (container: HTMLElement) => void;
}
