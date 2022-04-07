/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const text1 =
        'blybyb',
    text2 =
        'yby'
var longestCommonSubsequence = function (text1, text2) {
    var m = text1.length
    var n = text2.length
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            dp[i][j] =
                text1[i - 1] === text2[j - 1]
                    ? dp[i - 1][j - 1] + 1
                    : Math.max(dp[i][j - 1], dp[i - 1][j])
        }
    }

    return Math.max(...dp.map((res) => Math.max(...res)))
}

console.log(longestCommonSubsequence(text1, text2))
