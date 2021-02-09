import { IIconProps } from '../../interfaces';
import BaseComponent from '../BaseComponent';
export { default as ICONS } from './ImageIcons';
export default class Icon extends BaseComponent {
    private props;
    constructor(props: IIconProps);
    render(container: Node): void;
}
