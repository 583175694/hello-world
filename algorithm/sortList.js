/**
 * @排序链表
 */

const head = array2list([1, 4, 3, 2, 5])

function array2list(ary) {
    if (!ary.length) {
        return null
    }

    var head = { val: ary[0], next: null }
    var pnode = head //pnode变量用来保存前一个节点

    for (var i = 1; i < ary.length; i++) {
        var node = { val: ary[i], next: null }
        pnode.next = node //将前一个节点的next指向当前节点
        pnode = node //将node赋值给pnode
    }

    return head
}

function ListNode(val) {
    this.val = val
    this.next = null
}

var sortList = function (head) {
    if (!head || !head.next) return head
    const n = listLength(head)

    var cur = head

    for (let i = 0; i < n; i++) {
        cur = head
        var isSort = true
        while (cur.next) {
            if (cur.val > cur.next.val) {
                var tmp = cur.val
                cur.val = cur.next.val
                cur.next.val = tmp
                isSort = false
            }
            cur = cur.next
        }
        if (isSort) return head
    }

    return head
}

var listLength = function (head) {
    var cur = head
    var n = 1
    while (cur.next) {
        cur = cur.next
        n++
    }
    return n
}

console.log(sortList(head))
