import { ITheme } from "../../interfaces";
import { getCurrentTheme } from "../../theme";

export default class BaseComponent {
    element: HTMLElement
    theme: ITheme

    constructor() {
        this.theme = getCurrentTheme()
    }

    render(container: HTMLElement) {
        if (this.element)
            container.appendChild(this.element)
    }
}