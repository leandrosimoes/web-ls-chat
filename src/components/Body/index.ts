import { IBodyProps } from "../../interfaces";
import BaseComponent from '../BaseComponent'

export default class Body extends BaseComponent {
    props: IBodyProps

    constructor(props: IBodyProps) {
        super()

        this.props = props
    }

    render(container: HTMLElement) {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-body')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR

        container.appendChild(this.element)
    }
}