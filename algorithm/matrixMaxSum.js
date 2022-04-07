/**
 * @子矩阵的最大累加和问题
*/

function matrixMaxSum(matrix) {
    const result = []
    const len = matrix.length

    function dfs(res, curr) {
        if (res.length === len) {
            result.push(res.join(''))
            return
        }
        for (let i = 0; i < matrix[curr].length; i++) {
            res.push(matrix[curr][i])
            dfs(res, curr + 1)
            res.pop()
        }
    }

    dfs([], 0)
    return result
}

console.log(matrixMaxSum([['a', 'b'], ['n', 'm'], ['0', '1']]))