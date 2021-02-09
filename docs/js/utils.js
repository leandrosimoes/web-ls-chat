
;(() => {
    window.__LSCHAT__ = window.__LSCHAT__ || {}
    
    const delay = () => {
        return new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
    }
    
    const asyncForEach = async (array, callback) => {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array)
        }
    }
    
    window.__LSCHAT__.UTILS = {
        delay,
        asyncForEach,
    }
})()