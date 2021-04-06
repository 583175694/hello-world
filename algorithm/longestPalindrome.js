/**
 * @最长回文串
 */
var longestPalindrome = function (s) {
  var len = s.length
  var max = 0
  var ans = ''
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      var tmpStr = s.substring(i, j)
      if (func(tmpStr) && tmpStr.length > max) {
        max = tmpStr.length
        ans = tmpStr
      }
    }
  }
  return ans
}

var func = function (s) {
  var len = s.length
  var middle = parseInt(len / 2)
  for (let i = 0; i < middle; i++) {
    if (s[i] != s[len - i - 1]) {
      return false
    }
  }
  return true
}

console.log(longestPalindrome('babad'))
