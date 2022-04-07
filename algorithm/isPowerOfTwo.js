/**
 * @是2的幂
 * */

var isPowerOfTwo = function (n) {
    if (n === 1) return true
    if (n < 1) return false
    while (n % 1 == 0) {
        if (n === 2) {
            return true
        }
        n = n / 2
        console.log(n)
    }
    return false
}

console.log(isPowerOfTwo(8))
