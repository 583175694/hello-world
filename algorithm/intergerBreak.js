/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = []
    for (let i = 0; i <= n; i++) {
      dp[i] = -1
    }
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
      }
    }

    return dp
}

console.log(integerBreak(10))