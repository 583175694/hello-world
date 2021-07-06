/**
 * @环形链表II
 * */

var detectCycle = function (head) {
    if (head === null) {
        return null
    }
    let slow = head,
        fast = head
    while (fast !== null) {
        slow = slow.next
        if (fast.next !== null) {
            fast = fast.next.next
        } else {
            return null
        }
        if (fast === slow) {
            let ptr = head
            while (ptr !== slow) {
                ptr = ptr.next
                slow = slow.next
            }
            return ptr
        }
    }
    return null
}
