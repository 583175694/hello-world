/**
 * @一和零
 */

const strs = ['10', '0001', '111001', '1', '0'],
    m = 5,
    n = 3

function findMaxForm(strs, m, n) {
    let len = strs.length
    let dp = list(strs, m, n)

    for (let i = 0; i < len; i++) {
        const zeros = countZeroAndOne(strs[i])[0]
        const ones = countZeroAndOne(strs[i])[1]
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                if (i === 0) {
                    dp[i][j][k] = j >= zeros && k >= ones ? dp[i][j][k] + 1 : 0
                } else if (j >= zeros && k >= ones) {
                    dp[i][j][k] = Math.max(
                        dp[i - 1][j][k],
                        dp[i - 1][j - zeros][k - ones] + 1
                    )
                } else {
                    dp[i][j][k] = dp[i - 1][j][k]
                }
            }
        }
    }
    return dp[len - 1][m][n]
}

function countZeroAndOne(str) {
    let strArr = str.split('')
    let a = 0,
        b = 0
    for (let i = 0; i < strArr.length; i++) {
        a += strArr[i] ^ 1
        b += strArr[i] ^ 0
    }
    return [a, b]
}

function list(strs, m, n) {
    // 创建一个三维数组
    let dp = new Array()
    let len = strs.length
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(m + 1)
        for (let j = 0; j <= m; j++) {
            dp[i][j] = new Array(n + 1)
            for (let k = 0; k <= n; k++) {
                dp[i][j][k] = 0
            }
        }
    }

    return dp
}

findMaxForm(strs, m, n)
