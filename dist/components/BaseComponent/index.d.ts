import { ILsChatUser, ITheme } from "../../interfaces";
export default class BaseComponent {
    element: HTMLElement;
    theme: ITheme;
    user: ILsChatUser;
    constructor();
    render: (container: HTMLElement) => void;
}
