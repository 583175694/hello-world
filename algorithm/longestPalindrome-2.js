/**
 * @最长回文串
 */
var longestPalindrome = function (s) {
    const arr = s.split('')
    let nums = 0
    let map = new Map()

    for (const v of arr) {
        if (map.get(v)) {
            map.delete(v)
            nums += 2
        } else {
            map.set(v, true)
        }
    }

    return map.size === 0 ? nums : nums + 1
}