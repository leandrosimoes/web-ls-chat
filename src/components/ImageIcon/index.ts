import { IIconProps } from '../../interfaces'
import BaseComponent from '../BaseComponent'

export { default as ICONS } from './ImageIcons'

export default class Icon extends BaseComponent {
    private props: IIconProps

    constructor(props: IIconProps) {
        super()

        this.props = props
    }

    render(container: Node) {
        this.element = document.createElement('img')

        this.element.setAttribute('src', this.props.icon)
        
        container.appendChild(this.element)
    }
}
