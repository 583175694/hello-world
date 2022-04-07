/**
 * @两数相加 II
 */
var addTwoNumbers = function (l1, l2) {
    l1 = reverseList(l1), l2 = reverseList(l2)
    let pre = new ListNode(0)
    let cur = pre
    let carry = 0

    while (l1 || l2) {
        var li1 = l1 === null ? 0 : l1.val
        var li2 = l2 === null ? 0 : l2.val
        var sum = li1 + li2 + carry

        carry = sum > 9 ? 1 : 0
        sum = sum % 10
        cur.next = new ListNode(sum)

        cur = cur.next
        if (l1 !== null) {
            l1 = l1.next
        }
        if (l2 !== null) {
            l2 = l2.next
        }
    }
    if (carry === 1) {
        cur.next = new ListNode(carry)
    }
    return reverseList(pre.next)
}

var reverseList = function (head) {
    let prev = null
    let curr = head
    while (curr) {
        // 存储下一个节点
        const next = curr.next
        // next 指针改为指向前一个节点
        curr.next = prev
        // 存储前一个节点
        prev = curr
        // 存储后一个节点
        curr = next
    }
    return prev
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}