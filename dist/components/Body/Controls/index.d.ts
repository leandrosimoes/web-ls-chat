import { IControlsProps } from "../../../interfaces";
import BaseComponent from '../../BaseComponent';
export default class Controls extends BaseComponent {
    private props;
    constructor(props: IControlsProps);
    render: (container: HTMLElement) => void;
}
