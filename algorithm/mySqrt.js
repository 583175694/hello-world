/**
 * @x的平方根
*/

const mySqrt = x => {
    let [l, r] = [0, x]
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (mid * mid > x) {
            r = mid - 1
        } else if (mid * mid < x) {
            l = mid + 1
        } else {
            return mid
        }
    }
    return r
}

console.log(mySqrt(5))
console.log(mySqrt(8))
