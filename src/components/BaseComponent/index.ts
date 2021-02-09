import { ILsChatUser, ITheme } from "../../interfaces";
import { getCurrentUser } from "../../store";
import { getCurrentTheme } from "../../theme";

export default class BaseComponent {
    public element: HTMLElement
    public user: ILsChatUser

    constructor() {
        this.user = getCurrentUser()
    }

    public render = (container: HTMLElement) => {
        if (this.element)
            container.appendChild(this.element)
    }

    get theme() {
        return getCurrentTheme()
    }
}