/**
 * @两数之和
 * */
; (nums = [3, 3]), (target = 6)

var twoSum = function (nums, target) {
    const hash = new Map()

    for (var i = 0; i < nums.length; i++) {
        if (hash.get(target - nums[i]) !== undefined) {
            return [hash.get(target - nums[i]), i]
        }
        hash.set(nums[i], i)
    }

    return null
};

console.log(twoSum(nums, target))
