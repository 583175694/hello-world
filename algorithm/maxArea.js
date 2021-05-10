/**
 * @盛最多水的容器
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

var maxArea = function (nums) {
  let max = 0
  let i = 0, j = nums.length
  while (i < j) {
    let sum = (j - i) * Math.min(nums[i], nums[j])
    if (sum > max) {
      max = sum
    }
    if (nums[i] < nums[j]) {
      i++
    } else {
      j--
    }
  }

  return max
}

console.log(maxArea(height))