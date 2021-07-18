/**
 * @二叉搜索树的最近公共祖先
 */

const tree = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
        },
        right: {
            val: 2
        }
    },
    right: {
        val: 5
    }
}

var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return

    var pArr = findNode(root, p, [])
    var qArr = findNode(root, q, [])
    var i = 0

    while (pArr[i] === qArr[i]) {
        i++
    }

    return pArr[i - 1]
}

var findNode = function (root, node, arr) {
    arr.push(root)

    if (node.val < root.val) {
        findNode(root.left, node, arr)
    } else if (node.val > root.val) {
        findNode(root.right, node, arr)
    } else {
        return arr
    }
}

console.log(lowestCommonAncestor(tree, 1, 2))