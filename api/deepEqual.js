
/**
 * @深度比较
 * */

/** 判断是否是对象或者是数组 */
function isObject(obj) {
    if (typeof obj == 'object' && obj !== null) {
        return true
    }
}

(proto => {
    function isEqual(val1, val2) {
        /** 基本数据类型直接返回全等结果 */
        if (!isObject(val1) || !isObject(val2)) return val1 === val2

        /** 如果两个对象指向同一内存，直接判定是相同的 */
        if (val1 === val2) return true

        /** 获取对象key的长度，如果key不相等，直接判定是不相同的 */
        if ( Object.keys(val1).length !== Object.keys(val2).length) return false

        /** 遍历子项，如果子项是对象的话，递归 */
        for (const key in val1) {
            const res = isEqual(val1[key], val2[key])
            if (!res) return false
        }

        /** 全相等返回true */
        return true
    }
    proto.isEqual = isEqual
})(Object.prototype)

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
        y: [1, 2, 3]
    }
}
console.log(Object.isEqual(obj1, obj2)) // true
