/**
 * @买卖股票的最佳时机
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) return 0
    let max_profit = 0
    let min_price = prices[0]

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min_price) {
            min_price = prices[i]
        }
        max_profit = Math.max(max_profit, prices[i] - min_price)
    }

    return max_profit
}

console.log(maxProfit([7, 1, 3, 5, 6, 4]))
