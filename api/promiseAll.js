/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    let results = []
    let index = 0
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return resolve(promises)

        // 循环遍历数组，用Promise.resolve套上一层，使其全部返回promise
        for (let v of promises) {
            Promise.resolve(v).then((res) => {
                results.push(res)
                index += 1

                if (index === promises.length) {
                    return resolve(results)
                }
            }, (err) => {
                reject(err)
            })
        }
    })
}