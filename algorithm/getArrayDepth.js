/**
 * @计算数组深度
*/

function getArrayDepth(arr, deep) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...arr[i])
        }
    }

    if (res.length === 0) {
        return deep
    } else {
        return getArrayDepth(res, ++deep)
    }
}

console.log(getArrayDepth([1, 2, 3, [1, 2, [1, [1]]]], 1))