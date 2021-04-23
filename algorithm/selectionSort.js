/**
 * @选择排序
 * */

function selectionSort(arr) {
    const len = arr.length
    let minIndex, temp // 定义最小值、临时变量

    for (let i = 0; i < len - 1; i++) {
        minIndex = i // 循环数组，第一个元素为最小值
        for (let j = i + 1; j < len; j++) {
            // 如果还有更小的，重新赋值
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 将当前元素和最小值进行替换
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

console.log(selectionSort([3, 1, 5, 7, 24, 7, 35, 753, 3]))
