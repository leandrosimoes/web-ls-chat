import { IFooterProps, ILsChatMessage } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Footer extends BaseComponent {
    props: IFooterProps;
    replyingMessage?: ILsChatMessage;
    constructor(props: IFooterProps);
    handleOnSendMessageButtonPress: () => void;
    setReplyingMessage: (message: ILsChatMessage) => void;
    render(container: HTMLElement): void;
}
