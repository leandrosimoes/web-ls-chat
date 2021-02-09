import { IBodyProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Body extends BaseComponent {
    private props;
    constructor(props: IBodyProps);
    private setupEmptyMessages;
    setMessages: (messages: ILsChatMessage[]) => void;
    setIsLoading: (isLoading?: boolean) => void;
    render: (container: HTMLElement) => void;
}
