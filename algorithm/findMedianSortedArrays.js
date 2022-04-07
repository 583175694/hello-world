/**
 * @寻找两个正序数组的中位数
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2).sort((a, b) => a - b)
    var len = nums.length

    return len % 2 ? nums[Math.floor(len / 2)] : (nums[Math.floor(len / 2) - 1] + nums[Math.floor(len / 2)]) / 2
}