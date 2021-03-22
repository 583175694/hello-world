/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [10, 9, 2, 5, 3, 7, 101, 18]
var lengthOfLIS = function (nums) {
  let dp = []
  let currentMax = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = 1
    } else {
      dp[i] = Math.max(dp[i - 1] + 1, dp[i - 1])
    }
  }
  return dp
}

console.log(lengthOfLIS(nums))
