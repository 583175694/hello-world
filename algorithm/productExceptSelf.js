/**
 * @除自身以外数组的乘积
 */
var productExceptSelf = function (nums) {
    var l = [], r = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            l[i] = 1
        } else {
            l[i] = nums[i - 1] * l[i - 1]
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            r[i] = 1
        } else {
            r[i] = nums[i + 1] * r[i + 1]
        }
    }
    console.log(l, r)
    return nums.map((res, i) => {
        return l[i] * r[i]
    })
}

console.log(productExceptSelf([1, 2, 3, 4]))
