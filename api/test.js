/**
 * @async
 * */

// 定时器
function timer(args, wait = 2000) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            console.log(args)
            resolve(args)
        }, wait)
    }))
}

// async，传入generator
function async(func) {
    let gen = func()

    function next(data) {
        const result = gen.next(data)
        if (result.done) return result.value
        result.value.then((res) => {
            next(res)
        })
    }

    next()
}

let func = function *() {
    let f1 = yield timer('===>>> 1', 1000)
    let f2 = yield timer('===>>> 2', 1000)
    let f3 = yield timer('===>>> 3', 1000)
    console.log(f1, f2, f3)
}
async(func)
