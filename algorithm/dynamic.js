/**
 * @动态规划
 * */

// const arr = [4, 1, 1, 9, 1]

// // 递归
// function rec_opt(i) {
//     if (i === 0) return arr[i]
//     if (i === 1) return Math.max(arr[i], arr[i - 1])
//     return Math.max(rec_opt(i - 2) + arr[i], rec_opt(i - 1))
// }

// // 一次遍历
// function dp_opt(arr) {
//     let opt = []
//     opt[0] = arr[0]
//     opt[1] =Math.max(arr[0], arr[1])

//     for (let i = 2; i < arr.length; i++) {
//         let a = opt[i - 2] + arr[i]
//         let b = opt[i - 1]
//         opt[i] = Math.max(a, b)
//     }

//     return opt[opt.length - 1]
// }

// console.log(rec_opt(6))
// console.log(dp_opt(arr))

/**
 * @动态规划2
 * */

const arr2 = [3, 34, 4, 12, 5, 2]
const S = 9

// function rec_subset(arr, i, s) {
//   if (s === 0) return true
//   if (i === 0) return arr[0] === s
//   if (arr[i] > s) return rec_subset(arr, i - 1, s)

//   return rec_subset(arr, i - 1, s) || rec_subset(arr, i - 1, s - arr[i])
// }

// console.log(rec_subset(arr2, arr2.length, S))

function dp_subset(arr, s) {
  const row = s
  const column = arr.length
  let subset = new Array(row)
  for (let i = 0; i < row; i++) {
      subset[i] = new Array(column)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= s; j++) {
      if (j === 0) {
        subset[i][j] = true
      } else if (i === 0) {
        subset[i][j] = arr[i] === j
      } else if (arr[i] > j) {
        subset[i][j] = subset[i - 1][j]
      } else {
        subset[i][j] = subset[i - 1][j] || subset[i - 1][j - arr[i]]
      }
    }
  }

  console.log(subset)
  console.log(row, column)
  return subset[column - 1][row - 1]
}

console.log(dp_subset(arr2, S))
