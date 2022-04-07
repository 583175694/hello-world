/**
 * @节流
 * */

function throttle(func, wait) {
    let canRun = true
    let lastArgs
    return function (...arguments) {
        if (!canRun) {
            lastArgs = arguments
        } else {
            canRun = false
            func.apply(this, arguments)
            setTimeout(() => {
                canRun = true
                if (lastArgs) func.apply(this, lastArgs)
            }, wait)
        }
    }
}