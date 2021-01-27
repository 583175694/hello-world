/**
* @重写new
* */

function _new(Func, ...args) {
    // 创建新对象
    let object = Object.create(Func.prototype)

    // 将函数作用域赋值给新对象（this指向新对象）
    let result = Func.call(object, ...args)

    // 如果有返回值，返回这个对象
    if (result !== null && /^(object|function)$/.test(typeof result)) return result

    // 返回这个对象
    return object
}

function User (name) {
    this.name = name
    this.isAdmin = false
}

const annie = _new(User,'annie')
console.log(annie.name, annie.isAdmin)
