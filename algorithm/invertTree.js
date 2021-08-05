/**
 * @翻转二叉树
 */
var invertTree = function(root) {
    if (root === null) return null
    var tmp = root.left
    root.left = root.right
    root.right = tmp

    invertTree(root.left)
    invertTree(root.right)

    return root
}