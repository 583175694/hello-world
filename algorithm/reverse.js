/**
 * @整数反转
*/

var reverse = function (x) {
    x = x.toString().split('').reverse().join('')

    if (x.indexOf('-') > -1) {
        x = '-' + x.replace('-', '')
    }

    if (Math.abs(x) > Math.pow(2, 31)) {
        return 0
    } else {
        return x
    }
};

var reverse = function (x) {
    let res = 0;
    while (x != 0) {
        //每次取末尾数字
        let tmp = x % 10;

        res = res * 10 + tmp;
        x = parseInt(x / 10);
    }
    if (res > Math.pow(2, 31) - 1) {
        return 0;
    }
    if (res < Math.pow(-2, 31)) {
        return 0;
    }
    return res;
}