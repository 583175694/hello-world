/**
 * @最大子序和
 * @param {number[]} nums
 * @return {number}
 */
const nums = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            arr[i] = nums[0]
        } else {
            arr[i] = Math.max(arr[i - 1] + nums[i], arr[i - 1])
        }
    }

    return arr
}

console.log(maxSubArray(nums))