/**
 * @螺旋矩阵 II
*/

let n = 3

let generateMatrix = function(n) {
    const max = n * n
    let cur = 1
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let row = 0, column = 0
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 方向：右下左上
    let directionsIndex = 0

    while (cur <= max) {
        matrix[row][column] = cur
        cur++
        const nextRow = row + directions[directionsIndex][0]
        const nextColumn = column + directions[directionsIndex][1]

         // 如果它的下一步超出边界了，或者是已经被赋值过了，则换个方向
        if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
            directionsIndex = (directionsIndex + 1) % 4
        }
        row = row + directions[directionsIndex][0]
        column = column + directions[directionsIndex][1]
    }

    return matrix
}

console.log(generateMatrix(n))