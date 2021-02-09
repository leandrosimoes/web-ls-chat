import { IBodyProps, ILsChatMessage, ILsChatUser } from "../../interfaces";
import BaseComponent from '../BaseComponent'
import Message from "./Message";

export default class Body extends BaseComponent {
    props: IBodyProps

    constructor(props: IBodyProps) {
        super()

        this.props = props
    }

    setMessages = (messages: ILsChatMessage[]) => {
        this.element.innerHTML = ''
        
        const { user } = this.props

        let lastDate: Date
        let lastUser: string
        
        messages = messages.sort((a, b) => a.time <= b.time ? -1 : 1)
        const formatedMessages = messages.map(message => {
            const { time, user: messageUser } = message
            const messageDate = new Date(time)
            const showDateOnTop = !lastDate || lastDate.toDateString() !== messageDate.toDateString()

            const showArrow = !lastUser || lastUser !== messageUser.id || !!message.replyingTo

            lastDate = new Date(time)
            lastUser = messageUser.id

            return new Message({
                user,
                message,
                showArrow,
                showDateOnTop,
                onMessageItemLongPress: () => {},
            })
        })

        formatedMessages.reverse().forEach((message) => {
            message.render(this.element)
        })
    }

    render(container: HTMLElement) {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-body')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR

        container.appendChild(this.element)

        if (this.props.messages?.length > 0) {
            this.setMessages(this.props.messages)
        }
    }
}