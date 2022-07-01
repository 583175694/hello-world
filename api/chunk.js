/**
 * @param input
 * @param size
 * @returns {Array}
 * @desc 实现chunk函数
 */
chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

chunk(['a', 'b', 'c', 'd'], 5)
// => [['a', 'b', 'c', 'd']]

chunk(['a', 'b', 'c', 'd'], 0)
// => []

function chunk(input, size) {
  // 保证是非负整数
  size = Math.max(parseInt(size), 0)

  // 输入不是数组，或者 size 为 0 的情况输出空数组
  if (!Array.isArray(input) || size < 1) return []

  const len = input.length
  // 记录起始索引
  let start = 0
  // 记录结果
  let result = []
  while (start < len) { // 分割数组
    result.push(input.slice(start, start + size))
    start += size
  }
  return result
}
