/**
 * @深度比较
 * */

function isEqual(val1, val2) {
    if (!isObject(val1) || !isObject(val2)) return val1 === val2

    if (val1 === val2) return true

    if (Object.keys(val1).length !== Object.keys(val2).length) return false

    for (const key in val1) {
        let result = isEqual(val1[key], val2[key])
        if (!result) return false
    }

    return true
}

function isObject(obj) {
    if (typeof obj == 'object' && obj !== null) {
        return true
    }
}

const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: [1, 2, 3]
    }
}
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: [1, 2, 4]
    }
}
console.log(isEqual(obj1, obj2)) // true
