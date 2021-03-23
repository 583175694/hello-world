/**
 * @至少有K个重复字符的最长子串
 */
var s = "ababbc", k = 2

var longestSubstring = function (s, k) {
  s = s.split('')
  var dp = []
  var obj = {}

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1
    } else {
      obj[s[i]] = obj[s[i]] + 1
    }
    if (i === 0) {
      dp[i] = k - 1
    } else if (obj[s[i]] >= k) {
      dp[i] = dp[i - 1] + 1
    } else {
      dp[i] = dp[i - 1]
    }
  }

  return dp
}

console.log(longestSubstring(s, k))
