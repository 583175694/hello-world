/**
 * @最长连续序列
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    let nums_set = new Set()
    let max = 0

    for (const num of nums) {
        nums_set.add(num)
    }

    for (const num of nums_set) {
        let index = 1
        let current = num
        if (nums_set.has(current - 1)) continue

        while (nums_set.has(current + 1)) {
            index += 1
            current += 1
        }
        max = Math.max(max, index)
    }

    return max
};