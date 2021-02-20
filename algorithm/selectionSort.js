/**
 * 选择排序
 * */

function selectionSort(arr) {
    const len = arr.length
    let minIndex, temp

    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

console.log(selectionSort([3, 1, 5, 7, 24, 7, 35, 753, 3]))
