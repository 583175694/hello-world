/**
 * @搜索插入位置
*/

var searchInsert = function(nums, target) {
    var l = 0
    var r = nums.length - 1

    while (l <= r) {
        var mid = Math.floor(l + (r - l) / 2)

        if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            return mid
        }
    }

    return l
}