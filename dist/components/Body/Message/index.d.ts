import { IMessageProps } from "../../../interfaces";
import BaseComponent from '../../BaseComponent';
export default class Message extends BaseComponent {
    props: IMessageProps;
    constructor(props: IMessageProps);
    render(container: HTMLElement): void;
}
