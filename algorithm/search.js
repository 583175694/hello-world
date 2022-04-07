/**
 * @二分查找
 */
var search = function (nums, target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        console.log(mid)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1
}
