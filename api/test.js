/**
 * @快速排序
 * */
const nums = [5, 1, 1, 2, 0, 0]

function quickSort(nums) {
  if (nums.length <= 1) return nums
  let left = []
  let right = []
  let pivotIndex = Math.floor(nums.length / 2)
  let pivot = nums.splice(pivotIndex, 1)[0]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(nums))