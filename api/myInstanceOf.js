/**
 * @实现一个instanceof
*/

const result = [1, 2, 3] instanceof Array

function myInstanceOf(a, b) {
  const prototype = b.prototype
  a = a.__proto__

  while (a) {
    if (a === prototype) {
      return true
    }
    a = a.__proto__
  }
  return false
}

console.log(myInstanceOf({ b: 1 }, Array))