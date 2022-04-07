/**
 * @字符串相加
 */

let a = '9007199254740991'
let b = '1234567899999999999'

var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)

  num1 = num1.padStart(len, 0)
  num2 = num2.padStart(len, 0)
  var carry = 0
  var result = 0
  var sum = ''

  for (let i = len - 1; i >= 0; i--) {
    result = parseInt(num1[i]) + parseInt(num2[i]) + carry
    carry = result > 9 ? 1 : 0
    sum = result % 10 + sum
  }

  if (carry === 1) {
    sum = '1' + sum
  }

  return sum
}

addStrings(a, b)