/**
 * @反转多维数组
 * @param [1, [2, [3, [4, [5, 'null']]]]]
 * @return [5, [4, [3, [2, [1, 'null']]]]]
 */

function reverseMultArray(head) {
    let prev = null
    let curr = head

    while (curr) {
        const next = curr[1]
        curr[1] = prev
        prev = curr
        curr = next
    }
    return prev
}

reverseMultArray([1, [2, [3, [4, [5, null]]]]])
