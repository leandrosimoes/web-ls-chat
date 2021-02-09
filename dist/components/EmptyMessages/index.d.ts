import { IEmptyProps } from "../../interfaces";
import BaseComponent from '../BaseComponent';
export default class EmptyMessages extends BaseComponent {
    private props;
    constructor(props: IEmptyProps);
    setIsLoading: (isLoading: boolean) => void;
    render: (container: HTMLElement) => void;
}
