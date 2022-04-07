/**
 * @二叉搜索树的第k大节点
 */
var kthLargest = function(root, k) {
    var path = []
    function order(root) {
        if (root) {
            order(root.left)
            path.push(root.val)
            order(root.right)
        }
    }

    order(root)

    return path.sort((a, b) => b - a)[k - 1]
}