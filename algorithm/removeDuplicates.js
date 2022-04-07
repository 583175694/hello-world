/**
 * @删除排序数组中的重复项
 */
var removeDuplicates = function (nums) {
    if (nums < 2) return nums
    var len = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[len] = nums[i]
            len++
        }
    }

    return nums.slice(0, len)
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
