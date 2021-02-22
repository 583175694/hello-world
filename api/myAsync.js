/**
 * @async函数
 * */

/**
 * 定时器，模拟异步请求
 * */
function timer(args, wait = 2000) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(args)
        }, wait)
    }))
}

/**
 * 模拟async，传入Generator
 * */
function async(func) {
    let gen = func() // func {<suspended>}
    console.log(gen)

    function next(data) {
        let result = gen.next(data) // {value: xxx, done: false}
        if (result.done) return result.value
        result.value.then((res) => {
            next(res)
        })
    }

    next()
}

/**
 * 执行Generator
 * */
let func = function *() {
    let f1 = yield timer('===>> 1', 2000)
    let f2 = yield timer('===>> 2', 2000)
    let f3 = yield timer('===>> 3', 2000)
    console.log(f1, f2, f3)
}

async(func)
