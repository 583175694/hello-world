/**
 * @最长递增子序列
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0
    var dp = []
    var max = 1
    dp[0] = 1
    for (var i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = dp[i] > max ? dp[i] : max
    }
    return max
}