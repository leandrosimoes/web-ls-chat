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

    render(container: HTMLElement) {
        if (!this.props.isVisible) return

        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-header')

        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-header')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR

        container.appendChild(this.element)
        
        const icon = new ImageIcon({ icon: ImageIcons.close })

        this.element.innerHTML = `
            <div class="ls-chat-header-image-wrapper">
                <img src="${this.props.imageSource}" />
            </div>
            <div class="ls-chat-header-title-wrapper">
                Example Chat!
            </div>
            <button class="ls-chat-header-close-button"></button>
        `

        icon.render(this.element.querySelector('.ls-chat-header-close-button'))
    }
}