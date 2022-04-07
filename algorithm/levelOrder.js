/**
 * @二叉树的层序遍历
<<<<<<< HEAD
 * @param {TreeNode} root
 * @return {number[][]}
=======
>>>>>>> 11d725ed14a492986299a8d5801395818c0adbaf
 */

var data = require('./data')

var levelOrder = function(root) {
<<<<<<< HEAD
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const len = q.length;
        ret.push([]);
        for (let i = 1; i <= len; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return ret;
=======
    const ret = []
    if (!root) {
        return ret
    }

    const q = []
    q.push(root)
    while (q.length !== 0) {
        const len = q.length
        ret.push([])
        for (let i = 1; i <= len; ++i) {
            const node = q.shift()
            ret[ret.length - 1].push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }

    return ret
>>>>>>> 11d725ed14a492986299a8d5801395818c0adbaf
}

console.log(levelOrder(data.tree))
