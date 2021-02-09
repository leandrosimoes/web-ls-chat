import { IBodyProps } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class Body extends BaseComponent {
    props: IBodyProps;
    constructor(props: IBodyProps);
    render(container: HTMLElement): void;
}
