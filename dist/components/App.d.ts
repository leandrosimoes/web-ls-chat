import { IChatProps, ILsChatMessage } from "../interfaces";
export default class LsChat {
    private props;
    private main;
    private body;
    constructor(props: IChatProps);
    private setupTheme;
    private validate;
    private render;
    private prepareContent;
    private prepareHeader;
    private prepareBody;
    private prepareFooter;
    setMessages: (messages: ILsChatMessage[]) => void;
    setIsLoading: (isLoading?: boolean) => void;
}
