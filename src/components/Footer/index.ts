import { IFooterProps, ILsChatMessage } from "../../interfaces";
import { guid } from "../../utils";
import BaseComponent from '../BaseComponent'
import ImageIcon from "../ImageIcon";
import ImageIcons from "../ImageIcon/ImageIcons";

export default class Footer extends BaseComponent {
    props: IFooterProps
    replyingMessage?: ILsChatMessage

    constructor(props: IFooterProps) {
        super()

        this.props = props
    }

    handleOnSendMessageButtonPress = () => {
        const textarea = this.element.querySelector('textarea')
        const text = textarea.value

        if (text) {
            this.props.onSendMessage({
                id: guid(),
                text,
                time: new Date().getTime(),
                user: this.props.user,
                replyingTo: this.replyingMessage,
            })

            textarea.value = ''
            textarea.focus()
        }
    }

    setReplyingMessage = (message: ILsChatMessage) => {
        this.replyingMessage = message
    }

    render(container: HTMLElement) {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-footer')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR

        this.element.innerHTML = `
            <div class="ls-chat-footer-input-wrapper">
                <textarea placeholder="${this.props.interfaceTexts?.messageInputPlaceholder || 'Type your message here!'}" rows="1"></textarea>
            </div>
            <div class="ls-chat-footer-message-buttom-wrapper">
                <button type="button"></button>
            </div>
        `

        const textarea = this.element.querySelector('textarea')
        textarea.style.backgroundColor = this.theme.INPUT_BG_COLOR
        textarea.style.color = this.theme.INPUT_FG_COLOR
        textarea.setAttribute('placeholder', this.props.interfaceTexts?.messageInputPlaceholder || 'Type your message here!')

        const button = this.element.querySelector('button')
        button.style.backgroundColor = this.theme.PRIMARY_BUTTON_BG_COLOR
        button.style.color = this.theme.PRIMARY_BUTTON_BG_COLOR

        button.addEventListener('click', this.handleOnSendMessageButtonPress)
        
        const icon = new ImageIcon({ icon: ImageIcons.send })
        
        icon.render(button)

        container.appendChild(this.element)
    }
}