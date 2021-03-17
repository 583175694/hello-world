/**
 * @爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      arr[i] = 1
    } else {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }
  return arr
}

console.log(climbStairs(3))
