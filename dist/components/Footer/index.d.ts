import { IFooterProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Footer extends BaseComponent {
    private props;
    private replyingMessage?;
    constructor(props: IFooterProps);
    handleOnSendMessageButtonPress: () => Promise<void>;
    setReplyingMessage: (message: ILsChatMessage) => void;
    render: (container: HTMLElement) => void;
}
