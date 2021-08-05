/**
 * @二叉树的完全性检验
 */
var isCompleteTree = function (root) {
    let nodes = [[root, 1]]
    let i = 0
    while (i < nodes.length) {
        let [node, index] = nodes[i]
        i += 1
        if (node) {
            nodes.push([node.left, 2 * index])
            nodes.push([node.right, 2 * index + 1])
        }
    }
    return nodes[nodes.length - 1][1] === nodes.length
}