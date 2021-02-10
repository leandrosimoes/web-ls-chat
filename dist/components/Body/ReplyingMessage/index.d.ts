import { IReplyingMessageProps } from "../../../interfaces";
import BaseComponent from '../../BaseComponent';
export default class ReplyingMessage extends BaseComponent {
    private props;
    constructor(props: IReplyingMessageProps);
    render: (container: HTMLElement) => void;
}
