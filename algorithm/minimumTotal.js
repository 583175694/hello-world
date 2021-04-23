/**
 * @最小路径和
 */
const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
var minimumTotal = function (triangle) {
    const len = triangle.length
    if (len <= 1) return triangle[0][0]
    let dp = []
    for (let i = 0; i < len; i++) {
        dp.push(new Array(len))
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i === 0) {
                dp[i][j] = triangle[i][j]
            } else if (j === 0) {
                dp[i][j] = triangle[i][j] + dp[i - 1][j]
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = triangle[i][j] + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    triangle[i][j] + dp[i - 1][j],
                    triangle[i][j] + dp[i - 1][j - 1]
                )
            }
        }
    }

    return dp[len - 1].sort((a, b) => a - b)[0]
}

console.log(minimumTotal(triangle))
