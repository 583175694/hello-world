/**
 * @实现compose
*/

function fn1(args) {
  return '===>> 1 ' + args
}
function fn2(args) {
  return '===>> 2 ' + args
}
function fn3(args) {
  return '===>> 3 ' + args
}
function fn4(args) {
  return '===>> 4 ' + args
}

function compose() {
  var args = arguments;
  var start = args.length - 1
  return function () {
    let result = args[start].apply(this, arguments)
    while (start--) {
      result = args[start].call(this, result)
    }
    return result
  }
}

// ===>> 1 ===>> 2 ===>> 3 ===>> 4 hello
compose(fn1, fn2, fn3, fn4)('hello')

// ===>> 1 ===>> 2 ===>> 3 ===>> 4 hello
fn1(fn2(fn3(fn4('hello'))))