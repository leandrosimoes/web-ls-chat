;(() => {
    window.__LSCHAT__ = window.__LSCHAT__ || {}

    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {

            ;(async () => {
                const { MAIN_USER: user, getRandomMessages, getRandomUsers } = window.__LSCHAT__.API
                const { asyncForEach, delay } = window.__LSCHAT__.UTILS
                
                const users = await getRandomUsers(3)
                const messages = await getRandomMessages(10, [user, ...users])
                const container = document.querySelector('#container')

                const options = {
                    user,
                    container,
                    messages: [],
                    isLoading: true,
                    headerProps: {
                        isVisible: true,
                        imageSource: user.photo,
                        title: 'Example Chat!',
                        onCloseButtonPress: () => {
                            window.lsChat.setMessages([])
                        },
                    },
                    onSendMessage: async (message) => {
                        messages.push(message)
                        window.lsChat.setMessages([...messages])

                        return message
                    },
                    onSuccessSendMessage: async (message) => {
                        await delay()

                        await asyncForEach(messages, async (m) => {
                            if (m.id === message.id) {
                                message.isDelivered = true
                            }
                        })

                        window.lsChat.setMessages([...messages])

                        await delay()

                        await asyncForEach(messages, async (m) => {
                            if (m.id === message.id) {
                                message.isRead = true
                            }
                        })

                        window.lsChat.setMessages([...messages])
                    },
                    onErrorSendMessage: async (message, error) => {
                        console.log(message, error)
                    }
                }

                window.lsChat = new LsChat(options)
                
                await delay()

                window.lsChat.setMessages(messages)
            })()

        }
    })

})()