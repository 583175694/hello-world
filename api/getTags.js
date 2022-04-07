/**
 * @返回DOM tree包含的元素标签名
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  // your code here
  let set = new Set()

  let stack = [tree]

  while (stack.length > 0) {
    const top = stack.pop()
    set.add(top.tagName.toLowerCase())
    stack.push(...top.children)
  }

  return [...set]
}