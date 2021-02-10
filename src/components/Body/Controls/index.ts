import { IControlsProps } from "../../../interfaces";
import BaseComponent from '../../BaseComponent'
import ImageIcon from "../../ImageIcon";
import ImageIcons from "../../ImageIcon/ImageIcons";

export default class Controls extends BaseComponent {
    private props: IControlsProps
    
    constructor(props: IControlsProps) {
        super()

        this.props = props
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('aside')
        this.element.classList.add('ls-chat-controls')
        this.element.style.backgroundColor = this.theme.CONTROLS_BG_COLOR

        const isFromUser = this.props.user.id === this.props.message?.user.id

        if (isFromUser) {
            this.element.classList.add('from-user')
            this.element.innerHTML = `
                <button type="button" class="ls-chat-message-action-button ls-chat-message-reply-action"></button>
                <button type="button" class="ls-chat-message-action-button ls-chat-message-delete-action"></button>
                <div class="ls-chat-message-controls-clickable-overlay"></div>
            `
        } else {
            this.element.innerHTML = `
                <button type="button" class="ls-chat-message-action-button ls-chat-message-reply-action"></button>
                <div class="ls-chat-message-controls-clickable-overlay"></div>
            `
        }

        const releaseOverlay = this.element.querySelector('.ls-chat-message-controls-clickable-overlay')
        releaseOverlay.addEventListener('click', this.props.onPressControlBody)


        const replyButton = this.element.querySelector<HTMLElement>('.ls-chat-message-reply-action')
        const replyIcon = new ImageIcon({ icon: ImageIcons.reply })
        replyIcon.render(replyButton)

        replyButton.addEventListener('click', (event) => {
            this.props.onReplyControlButtonPress(this.props.message, event)
        })

        replyButton.style.backgroundColor = this.theme.MESSAGE_SELECTED_BG_COLOR

        if (isFromUser) {
            const deleteButton = this.element.querySelector<HTMLElement>('.ls-chat-message-delete-action')
            const deleteIcon = new ImageIcon({ icon: ImageIcons.trash })
            deleteIcon.render(deleteButton)
            deleteButton.addEventListener('click', (event) => {
                this.props.onDeleteControlButtonPress(this.props.message, event)
            })
            deleteButton.style.backgroundColor = this.theme.MESSAGE_SELECTED_BG_COLOR
        }

        container.appendChild(this.element)
    }
}