/**
 * @鸡蛋掉落-两枚鸡蛋
 */
var twoEggDrop = function (n) {
    var dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= j; k++) {
            dp[j] = Math.min(dp[j], Math.max(k, dp[j - k] + 1))
        }
    }

    console.log(dp)
}

twoEggDrop(3)