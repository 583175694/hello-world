/**
 * @param {number[][]} grid
 * @return {number}
 */
grid = [
  [1, 2, 3],
  [4, 5, 6],
]
var minPathSum = function (grid) {
  const len = grid.length
  let dp = []
  for (let i = 0; i < len; i++) {
    dp.push(new Array(grid[0].length))
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else {
        dp[i][j] = Math.min(
          dp[i][j - 1] + grid[i][j],
          dp[i - 1][j] + grid[i][j]
        )
      }
    }
  }

  return dp[len - 1][grid[0].length - 1]
}

console.log(minPathSum(grid))
