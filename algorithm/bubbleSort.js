/**
 * @冒泡排序
 * */

function bubbleSort(n) {
    if (n.length <= 1) return n

    // 循环对比 n.length 次
    for (let i = 0; i < n.length; i++) {
        var flag = false // 是否有交换
        for (let j = 1; j < n.length - i; j++) {
            // 两两对比，如果满足条件，交换位置
            if (n[j] < n[j - 1]) {
                var a = n[j]
                n[j] = n[j - 1]
                n[j - 1] = a
                flag = true // 有进行交换
            }
        }
        if (!flag) break // 如果没有交换，说明已经排序完毕，跳出循环
    }

    return n
}

console.log(bubbleSort([1, 2, 3, 5, 6, 4]))
