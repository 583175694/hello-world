/**
 * @有序矩阵中第 K 小的元素
 */
var kthSmallest = function(matrix, k) {
    let results = []

    for (let i = 0; i < matrix.length; i++) {
        results = results.concat(matrix[i])
    }

    return results.sort((a, b) => a - b)[k - 1]
}

// 第二种实现方式，直接用flat
var kthSmallest = function(matrix, k) {
    matrix = matrix.flat(Infinity)

    return matrix.sort((a, b) => a - b)[k - 1]
}