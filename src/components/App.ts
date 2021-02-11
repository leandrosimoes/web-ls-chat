import { ETheme } from "../enums"
import { IChatProps, ILsChatMessage } from "../interfaces"
import { setCurrentTheme } from '../theme'
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { setCurrentUser } from "../store"
import ReplyingMessage from "./Body/ReplyingMessage"

export default class LsChat {
    private props: IChatProps
    private main: HTMLDivElement
    private body: Body
    private header: Header
    private replyingMessage?: ILsChatMessage

    constructor(props: IChatProps) {
        this.props = props
        
        this.validate()
        this.setupTheme()
        this.render()

        setCurrentUser(this.props.user)
    }

    private setupTheme() {
        const { theme } = this.props

        if (theme === ETheme.DARK) {
            setCurrentTheme(ETheme.DARK)
        } else {
            setCurrentTheme(ETheme.LIGHT)
        }
    }

    private validate() {
        const { container, theme } = this.props

        if (!container) throw new Error('At least one container is required')
    }

    private render() {
        const { container } = this.props

        container.classList.add('ls-chat-wrapper')

        this.prepareContent()
        this.setIsLoading(this.props.isLoading)
    }

    private prepareContent() {
        const { container } = this.props

        this.main = document.createElement('div')
        this.main.classList.add('ls-chat')

        this.prepareHeader()
        this.prepareBody()
        this.prepareFooter()

        container.appendChild(this.main)
    }

    private prepareHeader() {
        this.header = new Header(this.props.headerProps)
        this.header.render(this.main)
    }

    private setReplyingMessage = (message?: ILsChatMessage) => {
        this.replyingMessage = message

        if (!this.replyingMessage) {
            const existentReplyingMessage = this.body.element.querySelector('.ls-chat-replying-message-wrap')
            if  (existentReplyingMessage) {
                existentReplyingMessage.classList.remove('shown')

                setTimeout(() => {
                    existentReplyingMessage.remove()
                }, 1000);
            }

            return
        }

        const replyingMessage = new ReplyingMessage({
            user: this.props.user,
            message,
            onCancelReplyingMessage: () => {
                this.replyingMessage = undefined
            },
        })

        replyingMessage.render(this.body.element)
    }

    private onSendMessage = async (message: ILsChatMessage) => {
        message.replyingTo = this.replyingMessage

        this.setReplyingMessage()

        const result = await this.props.onSendMessage(message)

        return result
    }

    private prepareBody() {
        this.body = new Body({
            messageSelectionEnabled: this.props.messageSelectionEnabled,
            messages: this.props.messages,
            setReplyingMessage: this.setReplyingMessage,
            onDeleteMessage: this.props.onDeleteMessage,
            onErrorDeleteMessage: this.props.onErrorDeleteMessage,
            onReplyControlPress: (replyingMessage: ILsChatMessage) => {},
            onSuccessDeleteMessage: this.props.onSuccessDeleteMessage,
            user: this.props.user,
            interfaceTexts: this.props.interfaceTexts,
            messageDateFormat: this.props.messageDateFormat,
            onReachEndOfMessagesList: this.props.onReachEndOfMessagesList,

        })
        this.body.render(this.main)
    }

    private prepareFooter() {
        const footer = new Footer({
            onCancelReplyingMessage: () => {},
            onErrorSendMessage: this.props.onErrorSendMessage,
            onSendMessage: this.onSendMessage,
            onSuccessSendMessage: this.props.onSuccessSendMessage,
            user: this.props.user,
            interfaceTexts: this.props.interfaceTexts,
            onMessageTextInputChange: this.props.onMessageTextInputChange,
        })
        footer.render(this.main)
    }

    public setMessages = (messages: ILsChatMessage[]) => {
        this.body.setMessages(messages)
    }

    public setIsLoading = (isLoading?: boolean) => {
        this.body.setIsLoading(isLoading)
    }

    public setIsTyping = (isLoading?: boolean) => {
        this.body.setIsTyping(isLoading)
    }

    public setTitle = (text: string) => {
        this.header.setTitle(text)
    }

    public destroy = () => {
        this.main.remove()
    }
}