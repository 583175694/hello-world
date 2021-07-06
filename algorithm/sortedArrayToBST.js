/**
 * @将有序数组转换为二叉搜索树
 * @param {number[]} nums
 * @return {TreeNode}
 */

const nums = [-10, -3, 0, 5, 9]

function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}
var sortedArrayToBST = function (nums) {
    function helper(nums, left, right) {
        if (left > right) return null

        let mid = Math.floor((right + left) / 2)
        const tree = new TreeNode(nums[mid])
        tree.left = helper(nums, left, mid - 1)
        tree.right = helper(nums, mid + 1, right)

        return tree
    }

    return helper(nums, 0, nums.length - 1)
}

console.log(sortedArrayToBST(nums))
