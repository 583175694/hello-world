/**
 * @最大子序和
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function (nums) {
    let arr = new Array()
    arr[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i])
    }

    return arr.sort((a, b) => a - b)[nums.length - 1]
}

console.log(maxSubArray(nums))
