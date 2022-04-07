/**
* @节流
* */

function throttle(func, wait = 500) {
    let canRun = true

    return function (...args) {
        if (!canRun) return

        canRun = false
        setTimeout(() => {
            func.apply(this, args)
            canRun = true
        }, wait)
    }
}