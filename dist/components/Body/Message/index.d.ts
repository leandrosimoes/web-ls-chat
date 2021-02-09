import { IMessageProps } from "../../../interfaces";
import BaseComponent from '../../BaseComponent';
export default class Message extends BaseComponent {
    private props;
    private _longClickTimeout;
    private message;
    constructor(props: IMessageProps);
    private wrapReplyMessageIfNecessary;
    render: (container: HTMLElement) => void;
}
