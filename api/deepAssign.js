/**
 * @深合并
 */

/** 判断是否是对象或者是数组 */
function isObject(obj) {
    if (typeof obj == 'object' && obj !== null) {
        return true
    }
}

(proto => {
    function deepAssign(val1, val2) {
        let val = deepClone(val1)

        for (const key in val2) {
            /**
             * obj.hasOwnProperty(prop)
             * 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。
             * 这个方法可以用来检测一个对象是否含有特定的自身属性；
             * 和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的
             * */
            if (!val2.hasOwnProperty(key)) continue

            /**
             * 如果子项仍旧是对象的话，继续进行深合并
             * */
            if (isObject(val[key]) && isObject(val2[key])) {
                val[key] = deepAssign(val[key], val2[key])
                continue
            }

            /**
             * 如果子项是基本数据类型，进行值传递
             * */
            val[key] = val2[key]
        }
        return val
    }
    proto.deepAssign = deepAssign
})(Object.prototype)

const target = { a: 1, b: 10 }
const source = { b: 2, c: 5 }
const returnedTarget = Object.deepAssign(target, source)
console.log(returnedTarget)
