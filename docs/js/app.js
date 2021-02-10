;(() => {
    window.__LSCHAT__ = window.__LSCHAT__ || {}

    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {

            ;(async () => {
                const { MAIN_USER: user, getRandomMessages, getRandomUsers } = window.__LSCHAT__.API
                const { asyncForEach, delay } = window.__LSCHAT__.UTILS
                
                const users = await getRandomUsers(3)
                let messages = await getRandomMessages(10, users)
                const container = document.querySelector('#container')

                const options = {
                    user,
                    container,
                    messages: [],
                    isLoading: true,
                    theme: 'DARK',
                    headerProps: {
                        isVisible: true,
                        imageSource: user.photo,
                        title: 'Example Chat!',
                        onCloseButtonPress: () => {
                            window.lsChat.setMessages([])
                        },
                    },
                    onSendMessage: async (message) => {
                        messages = [...messages, message]
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

                        window.lsChat.setIsTyping(true)

                        await delay()

                        const [replyMessage] = await getRandomMessages(1, users)
                        replyMessage.time = new Date().getTime()

                        if (faker.random.boolean()) {
                            replyMessage.replyingTo = { ...message }
                        }

                        messages = [...messages, replyMessage]

                        window.lsChat.setMessages([...messages])

                        window.lsChat.setIsTyping(false)
                    },
                    onErrorSendMessage: async (message, error) => {
                        console.log(message, error)
                    },
                    onDeleteMessage: async (message) => {
                        return message
                    },
                    onSuccessDeleteMessage: (message) => {
                        messages = messages.filter(m => m.id !== message.id)
                        window.lsChat.setMessages([...messages])
                    },
                    onErrorDeleteMessage: (error) => {
                        console.log(error)
                    }
                }

                window.lsChat = new LsChat(options)
                
                await delay()

                window.lsChat.setMessages(messages)
            })()

        }
    })

})()