/**
 * @二叉树的右视图
 */
var rightSideView = function (root) {
    const ret = []
    if (!root) {
        return ret
    }

    const q = []
    q.push(root)
    while (q.length !== 0) {
        var len = q.length
        ret.push([])
        for (var i = 1; i <= len; i++) {
            var node = q.shift()
            ret[ret.length - 1] = node.val
            if (node.left !== null) q.push(node.left)
            if (node.right !== null) q.push(node.right)
        }
    }

    return ret
}
