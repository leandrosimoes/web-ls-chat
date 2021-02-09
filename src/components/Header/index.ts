import { IHeaderProps, ITheme } from "../../interfaces";
import BaseComponent from '../BaseComponent'
import ImageIcon from "../ImageIcon";
import ImageIcons from "../ImageIcon/ImageIcons";

export default class Header extends BaseComponent {
    private props: IHeaderProps

    constructor(props: IHeaderProps) {
        super()

        this.props = props
    }

    public render = (container: HTMLElement) => {
        if (!this.props.isVisible) return

        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-header')

        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-header')

        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR
        this.element.style.color = this.theme.DEFAULT_COLOR

        container.appendChild(this.element)
        
        this.element.innerHTML = `
            <div class="ls-chat-header-image-wrapper">
                <img src="${this.props.imageSource}" />
            </div>
            <div class="ls-chat-header-title-wrapper">
                ${this.props.title || ''}
            </div>
            <button class="ls-chat-header-close-button" ${this.props.onCloseButtonPress ? '' : 'disabled'}></button>
        `

        if (this.props.onCloseButtonPress) {
            const icon = new ImageIcon({ icon: ImageIcons.close })
            const closeButton = this.element.querySelector('.ls-chat-header-close-button')

            closeButton.addEventListener('click', this.props.onCloseButtonPress)

            icon.render(closeButton)
        }

    }
}