/**
 * @最接近的三数之和
 */
var threeSumClosest = function(nums, target) {
var len = nums.length
    nums = nums.sort((a, b) => a - b)
    var min = Math.abs(nums[0] + nums[1] + nums[2] - target)
    var result = nums[0] + nums[1] + nums[2]

    for(var i = 0; i < len - 2; i++) {
        var j = i + 1
        var k = len - 1

        while(j < k) {
            var sum = nums[i] + nums[j] + nums[k]
            if (min > Math.abs(sum - target)) {
              min = Math.abs(sum - target)
              result = sum
            }

            if (sum < target) {
                j++
            } else {
                k--
            }
        }
    }

    return result
};