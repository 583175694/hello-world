/**
 * @环形链表
 */

const head = array2list([3, 2, 2, 3,2])

var hasCycle = function (head) {
    let fast = head
    let slow = head
    while (fast) {
        // 快指针跑两步
        fast = fast.next
        if (fast) {
            fast = fast.next
        }
        // 快指针追上慢指针返回true
        if (fast === slow) {
            return true
        }
        // 慢指针跑一步
        slow = slow.next
    }
    // 有null表示不是环形， 返回false
    return false
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

console.log(hasCycle(head))
