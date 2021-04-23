/**
 * @两数之和
 * */
;(nums = [3, 3]), (target = 6)

var twoSum = function (nums, target) {
    var arr = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b)
    var i = 0,
        j = nums.length - 1

    while (i < j) {
        if (arr[i] + arr[j] < target) {
            i++
        } else if (arr[i] + arr[j] > target) {
            j--
        } else {
            return [nums.indexOf(arr[i]), nums.lastIndexOf(arr[j])]
        }
    }
}

console.log(twoSum(nums, target))
