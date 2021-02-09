;(() => {
    window.__LSCHAT__ = window.__LSCHAT__ || {}

    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {

            ;(async () => {
                const { MAIN_USER: user, getRandomMessages, getRandomUsers } = window.__LSCHAT__.API
                
                const users = await getRandomUsers(3)
                const messages = await getRandomMessages(10, [user, ...users])
                const container = document.querySelector('#container')

                const options = {
                    user,
                    container,
                    messages,
                    headerProps: {
                        isVisible: true,
                        imageSource: user.photo,
                        title: 'Example Chat!',
                        onCloseButtonPress: () => alert('close'),
                    },
                    onSendMessage: (message) => alert(JSON.stringify(message, null, 2))
                }
                const lsChat = new LsChat(options)
                console.log(lsChat)
            })()

        }
    })

})()