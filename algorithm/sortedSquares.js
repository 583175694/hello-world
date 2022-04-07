/**
 * @有序数组的平方
 */

var nums = [-4, -1, 0, 3, 10]
var sortedSquares = function (nums) {
    nums = nums.map((res) => {
        return Math.pow(res, 2)
    })

    return nums.sort((a, b) => a - b)
}

console.log(sortedSquares(nums))