/**
 * @对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */

const data = require('./data')

var isSymmetric = function(root) {
  if (!root) return true

  return isSymmetricHelper(root.left, root.right)
}

function isSymmetricHelper(l, r) {
  if (l === null && r === null) {
    return true
  }
  if (l === null || r === null || l.val !== r.val) {
    return false
  }
  return isSymmetricHelper(l.left, r.right) && isSymmetricHelper(l.right, r.left)
}

console.log(isSymmetric(data.tree))