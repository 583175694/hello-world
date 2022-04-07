/**
 * @无重复字符的最长子串
<<<<<<< HEAD
 * @param {string} s
 * @return {number}
=======
>>>>>>> 11d725ed14a492986299a8d5801395818c0adbaf
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

<<<<<<< HEAD
lengthOfLongestSubstring('abcabcbb')
=======
lengthOfLongestSubstring('abcabcbb')

>>>>>>> 11d725ed14a492986299a8d5801395818c0adbaf
