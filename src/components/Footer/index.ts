import { IFooterProps } from "../../interfaces";
import BaseComponent from '../BaseComponent'

export default class Footer extends BaseComponent {
    props: IFooterProps

    constructor(props: IFooterProps) {
        super()

        this.props = props
    }

    render(container: HTMLElement) {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-footer')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR

        container.appendChild(this.element)
    }
}