/**
* @防抖函数
* */

function debounce(func, wait = 500) {
    // 先声明一个定时器
    let timer = 0

    return function (...args) {
        // 如果这个定时器不为空，则清除这个定时器，不执行里面的回调
        if (timer) clearTimeout(timer)

        // 定时器赋值，执行传入的方法，这里得注意作用域
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}
