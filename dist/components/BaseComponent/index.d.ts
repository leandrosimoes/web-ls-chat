import { ILsChatUser, ITheme } from "../../interfaces";
export default class BaseComponent {
    element: HTMLElement;
    user: ILsChatUser;
    constructor();
    render: (container: HTMLElement) => void;
    get theme(): ITheme;
}
