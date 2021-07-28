/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const m = 3,
    n = 2

var uniquePaths = function (m, n) {
    let arr = new Array()
    for (let i = 0; i <= m; i++) {
        arr.push(new Array(n))
        for (let j = 0; j <= n; j++) {
            arr[i][j] = 0
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || j === 1) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i][j - 1] + arr[i - 1][j]
            }
        }
    }

    return arr[m][n]
}

console.log(uniquePaths(m, n))