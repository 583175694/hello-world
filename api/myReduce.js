/**
 * @手写reduce
 */

(proto => {
    function myReduce(cb, init) {
        let arr = this
        let num = init === undefined ? arr[0] : init
        let i = init === undefined ? 1 : 0
        for (; i < arr.length; i++) {
            num = cb(num, arr[i], i)
        }
        return num
    }
    proto.myReduce = myReduce
})(Array.prototype)

var arr = [1, 2, 3]
let a = arr.myReduce((a, b) => {
    return a + b
})