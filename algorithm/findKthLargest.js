/**
 * @数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var quickSort = function (nums) {
    if (nums.length <= 1) return nums
    let l = [], r = []
    let pivotIndex = Math.floor(nums.length / 2)
    let pivot = nums.splice(pivotIndex, 1)[0]

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > pivot) {
        l.push(nums[i])
      } else {
        r.push(nums[i])
      }
    }

    return quickSort(l).concat(pivot, quickSort(r))
  }
  nums = quickSort(nums)
  return nums[k - 1]
}