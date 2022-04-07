/**
 * @替换空格
 */
var replaceSpace = function(s) {
    var res = []
    for(var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            res.push('%20')
        } else {
            res.push(s[i])
        }
    }
    return res.join('')
}