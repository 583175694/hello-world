/**
 * @移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums < 2) return nums
  let len = 0

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[len], nums[i]] = [nums[i], nums[len]]
      len++
    }
  }
  return nums
};