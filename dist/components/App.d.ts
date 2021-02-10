import { IChatProps, ILsChatMessage } from "../interfaces";
export default class LsChat {
    private props;
    private main;
    private body;
    private replyingMessage?;
    constructor(props: IChatProps);
    private setupTheme;
    private validate;
    private render;
    private prepareContent;
    private prepareHeader;
    private setReplyingMessage;
    private onSendMessage;
    private prepareBody;
    private prepareFooter;
    setMessages: (messages: ILsChatMessage[]) => void;
    setIsLoading: (isLoading?: boolean) => void;
    setIsTyping: (isLoading?: boolean) => void;
}
