/**
 * @最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var arr = strs[0]
    var res = ''

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (arr[i] !== strs[j][i]) return res
        }
        res += arr[i]
    }

    return res
};
