/**
 * @动态规划
 * */

const arr = [4, 1, 1, 9, 1]

// 递归
function rec_opt(i) {
    if (i === 0) return arr[i]
    if (i === 1) return Math.max(arr[i], arr[i - 1])

    return Math.max(rec_opt(i - 2) + arr[i], rec_opt(i - 1))
}

// 一次遍历
function dp_opt(arr) {
    let opt = []
    opt[0] = arr[0]
    opt[1] =Math.max(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
        let a = opt[i - 2] + arr[i]
        let b = opt[i - 1]
        opt[i] = Math.max(a, b)
    }

    return opt[opt.length - 1]
}

console.log(rec_opt(6))
console.log(dp_opt(arr))
