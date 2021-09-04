/**
 * @二叉树的锯齿形层序遍历
 */
var zigzagLevelOrder = function (root) {
    let ret = []
    if (!root) return ret

    let isOrderLeft = true;
    let q = []
    q.push(root)
    while (q.length !== 0) {
        ret.push([])
        let len = q.length
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            if (isOrderLeft) {
                ret[ret.length - 1].push(node.val)
            } else {
                ret[ret.length - 1].unshift(node.val)
            }
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        isOrderLeft = !isOrderLeft
    }
    return ret
}