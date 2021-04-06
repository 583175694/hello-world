/**
 * @插入排序
 * */

function insertSort(n) {
  if (n <= 1) return n

  // 对每个元素进行比较
  for (let i = 1; i < n.length; i++) {
    var value = n[i]
    let j = i - 1
    // 用当前元素和已排序的一一对比
    for (; j >= 0; j--) {
      // 比当前元素大的往后稍稍
      if (n[j] > value) {
        n[j + 1] = n[j]
      } else {
        // 直到比当前元素小的跳出循环
        break
      }
    }
    // 在比当前元素小的后边插入当前元素
    n[j + 1] = value
  }

  return n
}

console.log(insertSort([4, 5, 6, 1, 3, 2]))
