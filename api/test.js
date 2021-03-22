/**
 * @爬楼梯
 * */

function climbStairs(n) {
  let dp = []
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      dp[i] = 1
    } else {
      dp[i] = dp[i - 1] + dp[i - 2]
    }
  }

  return dp[n]
}

/**
 * @最大子序和
 * */
function maxSubArray(nums) {
  let dp = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
  }

  return dp.sort((a, b) => b - a)[0]
}

/**
 * @买卖股票的最佳时机
 * */
const prices = [7, 1, 5, 3, 6, 4]

function maxProfit(prices) {
  if (prices < 2) return 0
  let dp = []
  let minPrice = prices[0]
  dp[0] = 0
  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i]
    dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
  }

  return dp.sort((a, b) => b - a)[0]
}

/**
 * @买卖股票的最佳时机Ⅱ
 * */
function maxProfit_2(prices) {
  if (prices < 2) return 0
  let dp = []
  for (let i = 0; i < 2; i++) {
    dp.push(new Array(prices.length))
  }

  dp[0][0] = -prices[0]
  dp[1][0] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[0][i] = Math.max(dp[1][i - 1] - prices[i], dp[0][i - 1])
    dp[1][i] = Math.max(dp[0][i - 1] + prices[i], dp[1][i - 1])
  }

  return dp[1][prices.length - 1]
}

/**
 * @不同路径
 * */
const m = 3,
  n = 2
function uniquePaths(m, n) {
  if (m < 1 || n < 1) return

  let dp = []
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1))
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i <= 1 || j <= 1) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[m][n]
}

/**
 * @子集
 * */
const nums = [1, 2, 3]

function subsets(nums) {
  let dp = [[]]
  for (let i = 0; i < nums.length; i++) {
    let arr = deepClone(dp)
    arr = arr.map((res) => {
      return res.concat(nums[i])
    })
    dp = dp.concat(arr)
  }

  return dp
}

console.log(subsets(nums))