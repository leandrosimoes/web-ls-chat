# web-ls-chat
Web version of [react-native-ls-chat](https://github.com/leandrosimoes/react-native-ls-chat)

[Live sample](https://lesimoes.dev/web-ls-chat/)

## Instalation

### JS File

[ls-chat.min.js](https://raw.githubusercontent.com/leandrosimoes/web-ls-chat/main/dist/ls-chat.min.js)

### Library

`npm i web-ls-chat`

or

`yarn add web-ls-chat`

## Usage

```javascript
const options = {
    user: {
        id: '1',
        name: 'User name',
        photo: 'https://user-photo.uri',
    },
    container: document.querySelector('#container'),
    messages: [],
    isLoading: false,
    isFetching: false,
    theme: 'DARK', // 'DARK' or 'LIGHT'
    headerProps: {
        isVisible: true,
        imageSource: 'https://header-image.uri',
        title: 'Chat title',
        onCloseButtonPress: () => {},
    onSendMessage: async (message) => {
        return message
    },
    onSuccessSendMessage: async (message) => { ... },
    onErrorSendMessage: async (message, error) => { ... },
    onDeleteMessage: async (message) => {
        return message
    },
    onSuccessDeleteMessage: (message) => { ... },
    onErrorDeleteMessage: (error) => { ... },
    onReachEndOfMessagesList: async () => { ... }
}

window.lsChat = new LsChat(options)
```