/**
 * @寻找峰值
 */
var findPeakElement = function(nums) {
    var max = 0

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return i
        } else {
            max = i
        }
    }

    return max
}

