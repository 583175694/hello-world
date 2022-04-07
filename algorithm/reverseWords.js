/**
 * @翻转字符串里的单词
 */
var s = "a good   example"

var reverseWords = function(s) {
    return s.trim().split(" ").reverse().filter((res) => res).join(" ")
}

console.log(reverseWords(s))