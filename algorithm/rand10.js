/**
 * @用 Rand7() 实现 Rand10()
 */
var rand10 = function() {
    while(true) {
        let nums = (rand7() - 1) * 7 + rand7()
        if (nums <= 40) return nums % 10 + 1
    }
};