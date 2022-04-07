/**
 * @寻找旋转排序数组中的最小值
 */
var findMin = function(nums) {
    let l = 0
    let r = nums.length - 1

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)
        if (nums[mid] < nums[r]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return nums[l]
}