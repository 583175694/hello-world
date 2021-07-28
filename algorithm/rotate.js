/**
 * @旋转数组
 */
var nums = [1, 2, 3, 4, 5, 6, 7]
var k = 3
var rotate = function (nums, k) {
    var n = nums.length - k % nums.length
    let l = nums.splice(0, n)

    nums.push(...l)

    return nums
}

console.log(rotate(nums, k))