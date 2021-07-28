/**
 * @第一个错误的版本
*/

var solution = function(isBadVersion) {
    return function(n) {
        if (n === 1) return n

        var l = 1
        var r = n

        while (l < r) {
            var mid = Math.floor(l + (r - l) / 2)
            if (!isBadVersion(mid)) {
                l = mid + 1
            } else {
                r = mid
            }
        }
        return l
    }
}