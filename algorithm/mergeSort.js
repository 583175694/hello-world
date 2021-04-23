/**
 * @归并排序
 * */

const nums = [5, 1, 1, 2, 0, 0]

function mergeSort(nums) {
    const len = nums.length
    // 终止条件，分到不能再分了
    if (len === 1) return nums

    // 利用分治的思想，分成左右两份
    let mid = len / 2
    let left = nums.slice(0, mid)
    let right = nums.slice(mid, len)

    // 合并左右两份并进行排序
    return merge(mergeSort(left), mergeSort(right))
}

function merge(l, r) {
    let tmp = []
    // 左右数组都有元素的时候，循环对比
    while (l.length && r.length) {
        if (l[0] < r[0]) {
            tmp.push(l[0])
            l.splice(0, 1) // 左边元素删除一位
        } else {
            tmp.push(r[0])
            r.splice(0, 1) // 右边元素删除一位
        }
    }

    // 删完了之后，左右两边其中一边是空数组，把tmp、剩余数组、空数组进行合并，返回
    return tmp.concat(l).concat(r)
}

console.log(mergeSort(nums))
