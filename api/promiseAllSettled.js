/**
 * @PromiseAllSettled
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve(promises)
        let results = []
        let completed = 0

        for (let i = 0; i < promises.length; i++) {
            const v = promises[i]
            Promise.resolve(v).then((res) => {
                results[i] = { value: res, status: 'fulfilled' }
            }).catch((err) => {
                results[i] = { reason: err, status: 'rejected' }
            }).finally(() => {
                completed += 1
                if (completed === promises.length) {
                    return resolve(results)
                }
            })
        }
    })
}

const f1 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f1')
        }, 0);
    })
}

const f2 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('f2')
        }, 0);
    })
}

const f3 = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f3')
        }, 0);
    })
}

allSettled([f1(), f2(), f3()]).then((res) => {
    console.log(res)
})