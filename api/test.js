/**
 * @动态规划
 * */

const arr = [3, 34, 4, 12, 5, 2]
const S = 13

function rec_subset(arr, i, s) {
    if (s === 0) {
        return true
    } else if (i === 0) {
        return arr[0] === s
    } else {
        return false
    }
}

// console.log(
//     rec_subset(arr, arr.length - 1, S)
// )

function dp_subset(arr, s) {
    let list = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < s; j++) {
            list[i][j] = rec_subset(arr, i, j)
        }
    }

    console.log(list)
}

dp_subset(arr, S)
