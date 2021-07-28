/**
 * @二叉树的最近公共祖先
*/

var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root.val === p.val || root.val === q.val) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left === null) {
    return right
  } else if (right === null) {
    return left
  } else {
    return root
  }
}