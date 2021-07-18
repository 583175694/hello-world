/**
 * @param {string} s
 * @return {string}
 */

var s = "babad"

var longestPalindrome = function(s) {
  var result = ''
  for (let i = 0; i < s.length; i++) {
    // 奇数的情况
    helper(i, i)
    // 偶数的情况
    helper(i, i + 1)
  }

  function helper(l, r) {
    // 判断在边界内是否回文
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      l--
      r++
    }
    // 此时的 l，r 是不满足情况的，所以距离是从 l + 1 到 r - 1，所以是 r - l - 1
    if (r - l - 1 > result.length) {
      result = s.slice(l + 1, r)
    }
  }

  return result
}

console.log(longestPalindrome(s))

