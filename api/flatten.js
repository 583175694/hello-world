/**
 * @数组扁平化
 */
var flatten = function (arr) {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatten([1, 2, 3, [1, 2, 3, [1, 2],[1, 3]], 3, [3, 4, 1]]))