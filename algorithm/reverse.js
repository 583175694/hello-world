/**
 * @整数反转
*/

var reverse = function(x) {
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
