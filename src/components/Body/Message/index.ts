import { IMessageProps } from "../../../interfaces";
import { formatDate } from "../../../utils";
import BaseComponent from '../../BaseComponent'
import ImageIcon from "../../ImageIcon";
import ImageIcons from "../../ImageIcon/ImageIcons";

export default class Message extends BaseComponent {
    private props: IMessageProps

    constructor(props: IMessageProps) {
        super()

        this.props = props
    }

    public render = (container: HTMLElement) => {
        const { message } = this.props

        const isFromUser = message.user.id === this.user.id
        const messageDate = new Date(message.time)

        this.element = document.createElement('article')
        this.element.classList.add('ls-chat-message-wrap')

        this.element.innerHTML = `
            <div class="ls-chat-message-date hidden">
                ${formatDate(messageDate, this.props.messageDateFormat)}
            </div>
            <div class="ls-chat-message waiting">
                <div class="ls-chat-message-user-wrap">
                    <img src="${message.user.photo}" />
                    <span>${message.user.name}</span>
                </div>
                <div class="ls-chat-message-text-wrap">
                    ${message.text}
                </div>
                <div class="ls-chat-message-info-wrap">
                    <span class="ls-chat-message-info-time">${formatDate(messageDate, 'HH:ss')}</span>
                    <span class="ls-chat-message-info-icon"></span>
                </div>
            <div>
        `

        const messageEl = this.element.querySelector<HTMLElement>('.ls-chat-message')
        
        if (isFromUser) {
            this.element.classList.add('right')
            messageEl.style.backgroundColor = this.theme.USER_MESSAGE_BG_COLOR
        } else {
            this.element.classList.add('left')
            messageEl.style.backgroundColor = this.theme.MESSAGE_BG_COLOR
        }

        if (!this.props.showArrow && !this.props.showDateOnTop) {
            messageEl.classList.add('hide-arrow')
        }
        
        this.element.querySelector<HTMLElement>('.ls-chat-message-text-wrap').style.color = this.theme.DEFAULT_COLOR

        if (this.props.showDateOnTop) {
            const messageDateEl = this.element.querySelector<HTMLElement>('.ls-chat-message-date')
            messageDateEl.classList.remove('hidden')
            messageDateEl.style.backgroundColor = this.theme.DEFAULT_BG_COLOR
            messageDateEl.style.color = this.theme.DEFAULT_COLOR
        }
        
        const iconWrap = this.element.querySelector('.ls-chat-message-info-icon')
        
        let icon = ImageIcons.clock

        if (message.isDelivered) {
            icon = ImageIcons.check
            messageEl.classList.remove('waiting')
        }

        if (message.isRead) {
            icon = ImageIcons.checkDouble
            messageEl.classList.remove('waiting')
        }

        const newIcon = new ImageIcon({ icon })
        
        newIcon.render(iconWrap)
        
        container.appendChild(this.element)
    }
}