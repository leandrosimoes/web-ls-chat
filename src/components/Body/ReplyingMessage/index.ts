import { IReplyingMessageProps } from "../../../interfaces";
import BaseComponent from '../../BaseComponent'
import ImageIcon from "../../ImageIcon";
import ImageIcons from "../../ImageIcon/ImageIcons";
import Message from "../Message";

export default class ReplyingMessage extends BaseComponent {
    private props: IReplyingMessageProps
    
    constructor(props: IReplyingMessageProps) {
        super()

        this.props = props
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('aside')
        this.element.classList.add('ls-chat-replying-message-wrap')
        this.element.style.backgroundColor = this.theme.MESSAGE_SELECTED_BG_COLOR

        this.element.innerHTML = `
            <div class="ls-chat-replying-message-overlay"></div>
            <button type="button"></button>
        `

        const { message: replyingMessage } = this.props

        replyingMessage.replyingTo = undefined
        replyingMessage.text = replyingMessage.text.length > 80 
            ? `${replyingMessage.text.substr(0, 80)}...` 
            : replyingMessage.text

        const message = new Message({
            message: replyingMessage,
            onMessageItemLongPress: () => {},
            showArrow: false,
            showDateOnTop: false,
            user: this.props.user
        })

        const icon = new ImageIcon({
            icon: ImageIcons.closeWhite
        })

        const button = this.element.querySelector<HTMLElement>('button')
        icon.render(button)

        button.addEventListener('click', () => {
            this.element.classList.remove('shown')

            setTimeout(() => {
                this.props.onCancelReplyingMessage()
                this.element.remove()
            }, 1000);
        })

        message.render(this.element)

        container.appendChild(this.element)

        setTimeout(() => {
            this.element.classList.add('shown')
        }, 300);
    }
}