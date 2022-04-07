/**
 * @二叉树的最大深度
 */
var data = require('./data')

var maxDepth = function (root) {
    var height = 0
    var max = 0

    function recursiveTree(root, height) {
        if (!root) return
        height++
        if (max < height) {
            max = height
        }
        recursiveTree(root.left, height)
        recursiveTree(root.right, height)
    }

    recursiveTree(root, height)

    return max
}

console.log(maxDepth(data.tree))