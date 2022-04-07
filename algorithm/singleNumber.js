/**
 * @只出现一次的数字
 */

var singleNumber = function(nums) {
    let set = new Set()
    for (var i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i])
        } else {
            set.add(nums[i])
        }
    }
    return Array.from(set)[0]
};

console.log(singleNumber([2, 2, 1]));