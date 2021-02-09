import { IHeaderProps } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Header extends BaseComponent {
    private props;
    constructor(props: IHeaderProps);
    render(container: HTMLElement): void;
}
