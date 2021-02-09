import BaseComponent from '../BaseComponent'

export default class LoadingIndicator extends BaseComponent {
    constructor() {
        super()
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('div')
        this.element.classList.add('ls-chat-loading-indicator-wrap')
        this.element.style.backgroundColor = this.theme.DEFAULT_BG_COLOR
        this.element.style.color = this.theme.DEFAULT_COLOR

        this.element.innerHTML = `
            <div class="ls-chat-loading-indicator indicator1"></div>
            <div class="ls-chat-loading-indicator indicator2"></div>
            <div class="ls-chat-loading-indicator indicator3"></div>
        `

        const indicators = this.element.querySelectorAll<HTMLElement>('.ls-chat-loading-indicator')
        indicators.forEach((i) => i.style.backgroundColor = this.theme.DEFAULT_COLOR)

        container.appendChild(this.element)
    }
}