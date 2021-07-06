/**
 * @二叉搜索树中第K小的元素
 */

var data = require('./data')

var kthSmallest = function (root, k) {
    let arr = []
    var inOrder = function (node) {
        if (node) {
            inOrder(node.left)
            console.log(node.val)
            arr.push(node.val)
            inOrder(node.right)
        }
    }
    inOrder(root)
    return arr[k - 1]
}

console.log(kthSmallest(data.tree, 1))
