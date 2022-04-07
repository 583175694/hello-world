/**
 * @K 个一组翻转链表
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0)
    dummy.next = head

    let pre = dummy
    let end = dummy

    while (end.next !== null) {
        // k次一反转
        for (let i = 0; i < k && end !== null; i++) {
            end = end.next
        }
        if (end == null) break;
        // 记录前驱和后继
        let start = pre.next
        let next = end.next

        // 截断后继，反转前驱；此时start是链表尾部
        // 前驱指向反转后的链表头，反转后的链表尾start指向后继next
        end.next = null
        pre.next = reverseList(start)
        start.next = next

        // 重新记录头和尾
        pre = start
        end = start
    }
    return dummy.next
}

var reverseList = function(head) {
    let pre = null
    let cur = head

    while(cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    return pre
}