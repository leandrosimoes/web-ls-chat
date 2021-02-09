import { IEmptyProps } from "../../interfaces";
import BaseComponent from '../BaseComponent'
import LoadingIndicator from "../LoadingIndicator";

export default class EmptyMessages extends BaseComponent {
    private props: IEmptyProps

    constructor(props: IEmptyProps) {
        super()

        this.props = props
    }

    public setIsLoading = (isLoading: boolean) => {
        if (isLoading) {
            const loadingIndicator = new LoadingIndicator()
            this.element.innerHTML = `
                <span>${this.props.loadingMessage || 'Loading'}</span>
            `
            loadingIndicator.render(this.element)
        } else {
            this.element.innerHTML = `
                <span>${this.props.title || 'Awesome!'}</span>
                <span>${this.props.message || 'Be the first to write a message.'}</span>
            `
        }
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('section')
        this.element.classList.add('ls-chat-empty-messages')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR
        this.element.style.color = this.theme.DEFAULT_COLOR

        container.appendChild(this.element)

        this.setIsLoading(this.props.isLoading)
    }
}