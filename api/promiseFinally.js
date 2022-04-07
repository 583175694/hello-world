/**
 * @Promise.prototype.finally()
 * @param {Promise<any>} promise
 * @param {() => void} onFinally
 * @returns {Promise<any>}
 */
function myFinally(promise, onFinally) {
    return promise.then((res) => {
        return Promise.resolve(onFinally()).then(() => res)
    }).catch((err) => {
        return Promise.resolve(onFinally()).then(() => Promise.reject(err))
    })
}