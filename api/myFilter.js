/**
 * @实现数组的filter方法
*/

Array.prototype._filter = function (fn) {
  if (typeof fn !== 'function') throw Error('不是一个函数');

  const res = []
  const arr = this
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]) && res.push(arr[i])
  }

  return res
}

console.log([1, 2, 3, 4, 5]._filter(e => e > 2))