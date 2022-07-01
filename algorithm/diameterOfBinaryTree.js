// 二叉树的直径

var diameterOfBinaryTree = function (root) {
  let max = 0
  function maxDepth(root) {
    if (root === null) return 0
    let leftCount = maxDepth(root.left)
    let rightCount = maxDepth(root.right)
    max = Math.max(max, leftCount + rightCount)

    return Math.max(leftCount, rightCount) + 1
  }

  maxDepth(root)

  return max
};