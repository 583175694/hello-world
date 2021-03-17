/**
 * @一和零
 * */

let str = ["10", "0001", "111001", "1", "0"], m = 5, n = 3

function findMaxForm(str, m, n) {
    const arr = list(str, m, n)

    for (let i = 0; i < arr.length; i++) {
        const a = countZeroAndOne(str[i])[0]
        const b = countZeroAndOne(str[i])[1]

        for (let j = 0; j < m + 1; j++) {
            for (let k = 0; k < n + 1; k++) {
                if (i === 0) {
                    arr[i][j][k] = j >= a && k >= b ? arr[i][j][k] + 1 : 0
                } else if (j >= a && k >= b) {
                    arr[i][j][k] = Math.max(arr[i - 1][j][k], arr[i - 1][j - a][k - b] + 1)
                } else {
                    arr[i][j][k] = arr[i - 1][j][k]
                }
            }
        }
    }

    return arr[str.length - 1][m][n]
}

function list(str, m, n) {
    const len = str.length
    let arr = new Array()
    for (let i = 0; i < len; i++) {
        arr[i] = new Array(m + 1)
        for (let j = 0; j < m + 1; j++) {
            arr[i][j] = new Array(n + 1)
            for (let k = 0; k < n + 1; k++) {
                arr[i][j][k] = 0
            }
        }
    }

    return arr
}

function countZeroAndOne(str) {
    const strArr = str.split('')
    let a = 0, b=0
    for (let i = 0; i < strArr.length; i++) {
        a += strArr[i] ^ 1
        b += strArr[i] ^ 0
    }

    return [a, b]
}

console.log(findMaxForm(str, m, n))