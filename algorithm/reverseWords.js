/**
 * @反转字符串中的单词III
 */
var reverseWords = function(s) {
    s = s.split(" ")
    for(var i = 0; i < s.length; i++) {
        s[i] = reverseString(s[i])
    }
    return s.join(' ')
}

var reverseString = function (s) {
    s = s.split('')
    for (let i = 0; i < s.length / 2; i++) {
      var tmp = s[i]
      s[i] = s[s.length - i - 1]
      s[s.length - i - 1] = tmp
    }
    return s.join('')
}

console.log(reverseWords("Let's take LeetCode contest"))