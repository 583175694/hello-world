/**
 * @深克隆
 */

function deepClone(val) {
    // 如果不是对象，直接返回这个参数
    if (typeof val !== 'object') return val

    // 声明一个新变量，判断这个参数是数字还是对象
    let newVal = val instanceof Array ? [] : {}

    // 遍历参数对象
    for (const key in val) {

        // 是否有指定的键
        if (val.hasOwnProperty(key)) {

            // 如果子属性也是对象的话，进行一次递归，如果是基本数据类型，直接返回
            newVal[key] = typeof val[key] === 'object' ? deepClone(val[key]) : val[key]
        }
    }

    // 返回新对象
    return newVal
}

let a = {
    1: 'a',
    2: 'b',
    3: 'c'
}

let b = deepClone(a)
