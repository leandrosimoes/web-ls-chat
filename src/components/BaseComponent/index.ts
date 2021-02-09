import { ILsChatUser, ITheme } from "../../interfaces";
import { getCurrentUser } from "../../store";
import { getCurrentTheme } from "../../theme";

export default class BaseComponent {
    element: HTMLElement
    theme: ITheme
    user: ILsChatUser

    constructor() {
        this.theme = getCurrentTheme()
        this.user = getCurrentUser()
    }

    render(container: HTMLElement) {
        if (this.element)
            container.appendChild(this.element)
    }
}