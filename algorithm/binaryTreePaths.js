/**
 * @二叉树的所有路径
 */
var binaryTreePaths = function(root) {
    let paths = []
    function constructPaths(root, path) {
        if (root) {
            path += root.val.toString();
            if (root.left === null && root.right === null) {
                paths.push(path)
            } else {
                path += '->'
                constructPaths(root.left, path)
                constructPaths(root.right, path)
            }
        }
    }
    constructPaths(root, '')

    return paths
}