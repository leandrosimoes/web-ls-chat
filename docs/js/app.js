;(() => {

    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
            const container = document.querySelector('#container')
            const options = {
                container,
                headerProps: {
                    isVisible: true,
                    imageSource: 'https://avatars3.githubusercontent.com/u/5066378?s=400&u=98d81da11220a6d0f7f51532e2c3e949b50a445b&v=4',
                    title: 'Example Chat!',
                    onCloseButtonPress: () => alert('close'),
                },
                onSendMessage: (message) => alert(JSON.stringify(message, null, 2))
            }
            const lsChat = new LsChat(options)
            console.log(lsChat)
        }
    })

})()