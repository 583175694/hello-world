/**
 * @多数元素
 */
var majorityElement = function (nums) {
    const len = nums.length
    let map = new Map()

    for (var i = 0; i < len; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            var num = map.get(nums[i])
            map.set(nums[i], num + 1)
        }
    }

    let max = [0, 0]
    map.forEach((value, key) => {
        if (value > max[1]) {
          max = [key, value]
        }
    })

    return max[0]
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
