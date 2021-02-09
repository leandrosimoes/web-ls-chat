import { ITheme } from "../../interfaces";
export default class BaseComponent {
    element: HTMLElement;
    theme: ITheme;
    constructor();
    render(container: HTMLElement): void;
}
