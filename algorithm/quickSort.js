/**
 * @快速排序
 * */

function quickSort(arr) {
    if (arr.length <= 1) return arr

    let left = []
    let right = []
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([3, 1, 5, 7, 24, 7, 35, 753, 3]))
