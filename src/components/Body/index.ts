import { IBodyProps, ILsChatMessage, ILsChatUser } from "../../interfaces";
import BaseComponent from '../BaseComponent'
import EmptyMessages from "../EmptyMessages";
import FetchingIndicator from "../FetchingIndicator";
import TypingIndicator from "../TypingIndicator";
import Controls from "./Controls";
import Message from "./Message";

export default class Body extends BaseComponent {
    private props: IBodyProps
    private typingIndicator: TypingIndicator
    private fetchingIndicator: FetchingIndicator
    private controls: Controls

    constructor(props: IBodyProps) {
        super()

        this.props = props
    }

    private setupEmptyMessages = (isLoading?: boolean) => {
        const emptyMessages = new EmptyMessages({
            isLoading,
            title: this.props.interfaceTexts?.emptyMessagesTitle,
            message: this.props.interfaceTexts?.emptyMessagesMessage,
            loadingMessage: this.props.interfaceTexts?.loading,
        })

        const main = this.element.querySelector('main')
        main.innerHTML = ''
        emptyMessages.render(main)
    }

    public setMessages = (messages: ILsChatMessage[], keepScrollPosition?: boolean) => {
        if (!messages || messages.length === 0) {
            this.setupEmptyMessages()
            return
        }

        const lastScrollHeight = this.element.scrollHeight
        
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
                onMessageItemLongPress: this.selectMessage,
            })
        })

        const main = this.element.querySelector('main')
        main.innerHTML = ''

        formatedMessages.reverse().forEach((message) => {
            message.render(main)
        })

        if (!keepScrollPosition) {
            this.element.scrollTo(0, this.element.scrollHeight)
        } else {
            this.element.scrollTo(0, this.element.scrollHeight - lastScrollHeight)
        }
    }

    public setIsLoading = (isLoading?: boolean) => {
        this.setupEmptyMessages(isLoading)
    }

    public setIsTyping = (isTyping?: boolean) => {
        if (!isTyping) {
            this.typingIndicator.element.style.display = 'none'
        } else {
            this.typingIndicator.element.style.display = 'flex'
        }
    }

    private deleteMessage = async (message: ILsChatMessage) => {
        try {
            await this.props.onDeleteMessage(message)

            this.props.onSuccessDeleteMessage(message)

            this.selectMessage()
        } catch (error) {
            this.props.onErrorDeleteMessage(error)
        }
    }

    private handleActionButtonPress = (action: 'reply' | 'delete' | 'release', message?: ILsChatMessage, ) => {
        if (action === 'reply') {
            this.props.setReplyingMessage(message)
            this.selectMessage()
        }

        if (action === 'delete') {
            this.deleteMessage(message)
        }

        if (action === 'release') {
            this.selectMessage()
        }
    }

    public setIsFetching = (isFeching?: boolean) => {
        if (!isFeching) {
            this.fetchingIndicator.element.style.display = 'none'
        } else {
            this.fetchingIndicator.element.style.display = 'flex'
        }
    }

    public selectMessage = (message?: ILsChatMessage) => {
        const existentControls = (document.querySelectorAll('.ls-chat-controls') || [])[0]

        if (existentControls) {
            existentControls.classList.remove('shown')
            setTimeout(() => {
                existentControls.remove()
            }, 400)
        }

        if (!message) {
            this.element.querySelectorAll('.ls-chat-message.selected').forEach(m => m.classList.remove('selected'))
            return
        }
        
        this.controls = new Controls({
            message,
            onReplyControlButtonPress: (message: ILsChatMessage) => { 
                this.handleActionButtonPress('reply', message) 
            },
            onDeleteControlButtonPress: (message: ILsChatMessage) => { this.handleActionButtonPress('delete', message) },
            onPressControlBody: () => { this.handleActionButtonPress('release') },
            user: this.props.user,
        })

        this.controls.render(document.querySelector('.ls-chat'))

        setTimeout(() => {
            this.controls.element.classList.add('shown')
        }, 300)
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-body')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR

        container.appendChild(this.element)

        this.element.innerHTML = '<main></main>'
        
        this.typingIndicator = new TypingIndicator()
        this.typingIndicator.render(this.element)
        this.typingIndicator.element.style.display = 'none'

        this.fetchingIndicator = new FetchingIndicator()
        this.fetchingIndicator.render(this.element)
        this.fetchingIndicator.element.style.display = 'none'

        if (this.props.messages?.length > 0) {
            this.setMessages(this.props.messages)
        }
    }
}