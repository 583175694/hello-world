/**
 * @括号生成
 */

var generateParenthesis = function (n) {
    let res = []

    const help = function (cur, left, right) {
        if (cur.length === 2 * n) {
            res.push(cur)
            return res
        }
        if (left < n) {
            help(cur + '(', left + 1, right)
        }
        if (right < left) {
            help(cur + ')', left, right + 1)
        }
    }

    help("", 0, 0)

    return res
}

console.log(generateParenthesis(3))