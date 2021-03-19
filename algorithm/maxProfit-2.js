/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0

  let arr = new Array()
  for (let i = 0; i < prices.length; i++) {
    arr.push(new Array(2))
  }

  arr[0][0] = 0
  arr[0][1] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    arr[i][0] = Math.max(arr[i - 1][0], arr[i - 1][1] + prices[i])
    arr[i][1] = Math.max(arr[i - 1][1], arr[i - 1][0] - prices[i])
  }

  return arr[prices.length - 1][0]
}

console.log(maxProfit([7, 1, 3, 5, 6, 4]))
