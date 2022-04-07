/**
 * @三数之和
 */
var threeSum = function(nums) {
    var len = nums.length
    nums = nums.sort((a, b) => a - b)
    var result = []

    for(var i = 0; i < len - 2; i++) {
        var j = i + 1
        var k = len - 1

        if (i > 0 && nums[i] === nums[i - 1]) continue
        while(j < k) {
            var sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                while(nums[j] === nums[++j]) {}
                while(nums[k] === nums[--k]) {}
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return result
};