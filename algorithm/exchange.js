/**
 * @调整数组顺序使奇数位于偶数前面
*/

function exchange(nums) {
    var j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            var tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
            j++
        }
    }

    return nums
}

console.log(exchange([1, 2, 3, 4]))
