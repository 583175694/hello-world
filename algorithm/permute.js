/**
 * @全排列
*/

var permute = function (nums) {
  let res = []

  function perm(n, p, q) {
    if (p === q) {
      const newArr = deepClone(n)
      console.log(n)
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

  console.log(res)

  return res
}

permute([1, 2, 3])

function deepClone(val) {
  if (typeof val !== 'object') return val
  let newVal = val instanceof Array ? [] : {}
  for (const key in val) {
    if (val.hasOwnProperty(key)) {
      newVal[key] = typeof val[key] === 'object' ? deepClone(val[key]) : val[key]
    }
  }
  return newVal
}