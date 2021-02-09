import { IBodyProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Body extends BaseComponent {
    props: IBodyProps;
    constructor(props: IBodyProps);
    setMessages: (messages: ILsChatMessage[]) => void;
    render(container: HTMLElement): void;
}
