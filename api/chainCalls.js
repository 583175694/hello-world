/**
 * @链式调用
 * u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')
 * 实现这个u
 */

class U {
    constructor() {
        this.promise = Promise.resolve();
    }

    console(str) {
        this.promise = this.promise.then(() => {
            console.log(str)
        })
        return this
    }

    setTimeout(wait) {
        this.promise = this.promise.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, wait)
            })
        })
        return this
    }
}

const u = new U()
u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')