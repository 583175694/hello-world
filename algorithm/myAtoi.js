/**
 * @字符串转换整数 (atoi)
 */
var myAtoi = function (s) {
    // 字符如果不在数字范围内，则停止
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // 判断是正数还是负数
    const str = ['-', '+']
    // 结果
    let result = ''
    // 符号
    let sign = ''

    // 去除两边空格
    s = s.trim()
    for (let i = 0; i < s.length; i++) {
        if (i === 0 && str.indexOf(s[i]) !== -1) {
            // 如果有正号或者符号则赋值给符号
            sign += s[i]
        } else if (nums.indexOf(s[i]) === -1) {
            // 如果遍历到非数字类型，返回
            break
        } else {
            // 结果加一位
            result += s[i]
        }
    }
    if (result === '') return 0
    result = sign + result

    // 判断是否在范围内
    if (Number(result) > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    } else if (Number(result) < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    } else {
        return Number(result)
    }
};