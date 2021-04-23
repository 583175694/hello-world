/**
 * @完全平方数
 */
var numSquares = function (n) {
    var dp = []

    for (let i = 0; i <= n; i++) {
        dp[i] = i
        for (let j = 0; j * j <= i; j++) {
            dp[i] = Math.min(1 + dp[i - j * j], dp[i])
        }
    }

    return dp[n]
}

console.log(numSquares(25))
