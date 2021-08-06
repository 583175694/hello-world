/**
 * @promisify
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any>}
 */

function promisify(func) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            args.push(function callback(err, data) {
                if (err) return reject(err)
                resolve(data)
            })
            func.call(this, ...args)
        })
    }
}

const callback = (error, data) => {
    if (error) {
        // 出错的时候
    } else {
        // 成功的时候
    }
}

const func = (arg1, arg2, callback) => {
    // 一些异步逻辑
    if (hasError) {
        callback(someError)
    } else {
        callback(null, someData)
    }
}

// 实现
const promisedFunc = promisify(func)

promisedFunc().then((data) => {
    // 成功的时候
}).catch((error) => {
    // 出错的时候
})