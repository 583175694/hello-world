/**
 * @全排列
*/

var permute = function (nums) {
  let res = []

  function perm(n, p, q) {
    if (p === q) {
      const newArr = JSON.parse(JSON.stringify(n))
      res.push(newArr)
    }
    for (let i = p; i <= q; i++) {
      swap(n, p, i)
      perm(n, p + 1, q)
      swap(n, p, i)
    }
  }

  function swap(n, p, q) {
    let tmp = n[p]
    n[p] = n[q]
    n[q] = tmp
  }

  perm(nums, 0, nums.length - 1)

  return res
}

console.log(permute([1, 2, 3]))