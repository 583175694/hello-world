/**
 * @链表中倒数第k个节点
 */
var getKthFromEnd = function (head, k) {
    let fast = head
    let slow = head

    while (k) {
        k -= 1
        fast = fast.next
    }

    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
}