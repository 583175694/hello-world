/**
 * @验证二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */

var data = require('./data')

var isValidBST = function(root) {
  var arr = []
  function preOrder(root) {
    if (root) {
      preOrder(root.left)
      arr.push(root.val)
      preOrder(root.right)
    }
  }

  preOrder(root)
  for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] >= arr[i + 1]) return false
  }

  return true
}

console.log(isValidBST(data.tree))