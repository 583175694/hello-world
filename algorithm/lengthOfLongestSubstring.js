/**
 * @无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0
    var queue = []

    for (let i = 0; i < s.length; i++) {
        while(queue.indexOf(s[i]) !== -1) {
          queue.shift()
        }
        queue.push(s[i])
        max = queue.length > max ? queue.length : max
    }

    return max
}

lengthOfLongestSubstring('abcabcbb')

