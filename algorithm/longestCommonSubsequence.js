/**
 * @最长公共子序列
 */
var longestCommonSubsequence = function (text1, text2) {
    var m = text1.length
    var n = text2.length
    var dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = text1[i - 1] === text2[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }

    return dp[m][n]
}