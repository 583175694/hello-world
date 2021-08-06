/**
 * @PromiseAny
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return reject(promises)
        let results = []
        let completed = 0

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then((res) => {
                if (res) return resolve(res)
            }).catch((err) => {
                results[i] = err
                completed += 1
                if (completed === promises.length) {
                    reject(new AggregateError(
                        'No Promise in Promise.any was resolved',
                        results
                    ))
                }
            })
        }
    })
}