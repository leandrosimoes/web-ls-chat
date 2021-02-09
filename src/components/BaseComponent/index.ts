import { ILsChatUser, ITheme } from "../../interfaces";
import { getCurrentUser } from "../../store";
import { getCurrentTheme } from "../../theme";

export default class BaseComponent {
    public element: HTMLElement
    public theme: ITheme
    public user: ILsChatUser

    constructor() {
        this.theme = getCurrentTheme()
        this.user = getCurrentUser()
    }

    public render = (container: HTMLElement) => {
        if (this.element)
            container.appendChild(this.element)
    }
}