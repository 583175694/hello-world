/**
 * @旋转链表
 * */
const head = array2list([1,2,3,4,5]), k = 2

var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) {
        return head
    }

    var cur = head
    var n = 1
    while (cur.next) {
        cur = cur.next
        n += 1
    }
    let add = n - k % n;
    if (add === n) {
        return head;
    }

    cur.next = head
    while(add) {
        cur = cur.next
        add--
    }
    const ret = cur.next
    cur.next = null
    return ret
}


function ListNode(val) {
    this.val = val
    this.next = null
}

function array2list(ary) {
    if (!ary.length) {
        return null
    }

    var node
    var head = { val: ary[0], next: null }
    var pnode = head //pnode变量用来保存前一个节点

    for (var i = 1; i < ary.length; i++) {
        node = { val: ary[i], next: null }
        pnode.next = node //将前一个节点的next指向当前节点
        pnode = node //将node赋值给pnode
    }

    return head
}
