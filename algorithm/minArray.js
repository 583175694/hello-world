/**
 * @旋转数组的最小数字
 */
var minArray = function(numbers) {
    let [l, r] = [0, numbers.length - 1]
    while (l < r) {
        if (numbers[l] >= numbers[r]) {
            l += 1
        } else {
            return numbers[l]
        }
    }
    return numbers[r]
}