import BaseComponent from '../BaseComponent'

export default class FetchingIndicator extends BaseComponent {
    constructor() {
        super()
    }

    public render = (container: HTMLElement) => {
        this.element = document.createElement('aside')
        this.element.classList.add('ls-chat-fetching-indicator-wrap')

        this.element.innerHTML = `
            <div class="ls-chat-fetching-indicator indicator1"></div>
            <div class="ls-chat-fetching-indicator indicator2"></div>
            <div class="ls-chat-fetching-indicator indicator3"></div>
        `

        const indicators = this.element.querySelectorAll<HTMLElement>('.ls-chat-fetching-indicator')
        indicators.forEach((i) => i.style.backgroundColor = this.theme.DEFAULT_COLOR)

        container.appendChild(this.element)
    }
}