/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const nums = [-1, 0, 3, 5, 9, 12], target = 9
var search = function (nums, target) {
    if (nums.length === 1) return nums[0]
    if (nums.length < 1) return -1

    nums = nums.sort((a, b) => a - b)
    let low = 0
    let high = nums.length - 1
    console.log(high)

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        console.log(mid)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1
}
console.log(search(nums, target))

// 递归的形式
var bsearch = function (nums, low, high, target) {
  if (low > high) return -1

  const mid = Math.floor((low + high) / 2)
  if (nums[mid] === target) {
    return mid
  } else if (nums[mid] < target) {
    return bsearch(nums, mid + 1, high, target)
  } else {
    return bsearch(nums, low, mid - 1, target)
  }
}
console.log(bsearch(nums, 0, nums.length - 1, target));