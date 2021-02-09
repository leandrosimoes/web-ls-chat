import { IFooterProps, ILsChatMessage } from "../../interfaces";
import { guid } from "../../utils";
import BaseComponent from '../BaseComponent'
import ImageIcon from "../ImageIcon";
import ImageIcons from "../ImageIcon/ImageIcons";

export default class Footer extends BaseComponent {
    private props: IFooterProps
    private replyingMessage?: ILsChatMessage

    constructor(props: IFooterProps) {
        super()

        this.props = props
    }

    public handleOnSendMessageButtonPress = async () => {
        const textarea = this.element.querySelector('textarea')
        const text = textarea.value

        if (text) {
            const newMessage = ({
                id: guid(),
                text,
                time: new Date().getTime(),
                user: this.props.user,
                replyingTo: this.replyingMessage,
            })

            try {
                await this.props.onSendMessage(newMessage)

                textarea.value = ''
                textarea.focus()

                await this.props.onSuccessSendMessage(newMessage)
            } catch (error) {
                await this.props.onErrorSendMessage(newMessage, error)
            }
        }
    }

    public setReplyingMessage = (message: ILsChatMessage) => {
        this.replyingMessage = message
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-footer')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR
        this.element.style.color = this.theme.DEFAULT_COLOR

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