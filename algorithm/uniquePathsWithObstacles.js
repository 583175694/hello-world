/**
 * @不同路径 II
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (var i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
        dp[i][0] = 1;
    }
    for (var j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j <= n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }

    return dp[m - 1][n - 1]
}

