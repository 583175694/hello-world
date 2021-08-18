/**
 * @函数柯里化
*/

function curry(fn, args) {
    // 获取函数 add 的形参个数
    var length = fn.length
    // 递归参数
    args = args || []
    return function () {
        // _args获取参数
        var _args = args.concat([].slice.call(arguments))

        if (_args.length < length) {
            // 如果_args长度还没达到传入函数的参数长度的话，接着递归curry，将_args作为参数传入
            return curry.call(this, fn, _args)
        } else {
            // _args长度等于传入函数参数长度的话，将_args作为参数，输出传入函数
            return fn.apply(this, _args)
        }
    }
}

var add = curry(fn)

function fn(a, b, c) {
    return a + b + c
}

add(2,3,4)
add(2)(3)(4)
add(2,3)(4)
add(2)(3,4)
