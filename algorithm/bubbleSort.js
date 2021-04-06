/**
 * @冒泡排序
 * */

function bubbleSort(n) {
  if (n.length <= 1) return n
  for (let i = 0; i < n.length; i++) {
    var flag = false
    for (let j = 1; j < n.length - i; j++) {
      if (n[j] < n[j - 1]) {
        var a = n[j]
        n[j] = n[j - 1]
        n[j - 1] = a
        flag = true
      }
    }
    if (!flag) break
  }

  return n
}

console.log(bubbleSort([1, 2, 3, 5, 6, 4]))
