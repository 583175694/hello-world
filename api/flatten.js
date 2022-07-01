/**
 * @数组扁平化
 */

var flatten = function (arr, depth = 1) {
  if (depth < 1) return arr;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i], depth - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

// var flatten = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       arr.splice(i, 1, ...arr[i]);
//     }
//   }
//   return arr;
// };

// function flatten(arr) {
//   return arr.reduce((pre, cur) => {
//     return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
//   }, [])
// }

console.log(flatten([1, 2, 3, [1, 2, 3, [1, 2], [1, 3, [2, 3]]], 3, [3, 4, 1]], 2));
console.log(flatten([1, [2], [3, [4]]], Infinity));
