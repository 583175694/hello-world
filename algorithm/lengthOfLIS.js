/**
 * @最长递增子序列
 */
const nums = [0, 1, 0, 3, 2, 3]
var lengthOfLIS = function (nums) {
  if (nums <= 1) return 1
  let dp = []
  let currentMax = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = 0
    } else if (currentMax <= nums [i - 1]) {
      dp[i] = Math.max(currentMax + dp[i - 1], dp[i - 1])
    } else {
      dp[i] = Math.max(dp[i - 1] + nums[i], dp[i - 1])
    }
  }

  return dp
}

console.log(lengthOfLIS(nums))