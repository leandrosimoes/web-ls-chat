import LsChat from './components/App'
import './styles/ls-chat.css'

;((window: any) => {
    window.LsChat = LsChat
})(typeof window !== typeof undefined ? window : {})

export default LsChat