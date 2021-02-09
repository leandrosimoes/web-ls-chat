import { ETheme } from "../enums"
import { IChatProps, ILsChatMessage } from "../interfaces"
import { setCurrentTheme } from '../theme'
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import { setCurrentUser } from "../store"

export default class LsChat {
    private props: IChatProps
    private main: HTMLDivElement
    private body: Body

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

        if  (this.props.isLoading) {
            this.setIsLoading(this.props.isLoading)
        }
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
        const header = new Header(this.props.headerProps)
        header.render(this.main)
    }

    private prepareBody() {
        this.body = new Body({
            messageSelectionEnabled: this.props.messageSelectionEnabled,
            messages: this.props.messages,
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
            onSendMessage: this.props.onSendMessage,
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

}