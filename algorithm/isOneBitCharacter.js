/**
 * @1比特与2比特字符
 */
var isOneBitCharacter = function(bits) {
    var i = 0
    while (i < bits.length - 1) {
        if (bits[i] === 1) {
            i += 2
        } else if (bits[i] === 0) {
            i += 1
        }
    }
    return i === bits.length - 1
}
console.log(isOneBitCharacter([1, 0, 0, 1]))