/**
 * @合并两个有序链表
 */

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

const l1 = array2list([1, 2, 4])
const l2 = array2list([1, 3, 4])

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        // 出口，如果l1是Null，剩下的都是l2
        return l2
    } else if (l2 === null) {
        // 出口，如果l2是Null，剩下的都是l1
        return l1
    } else if (l1.val < l2.val) {
        // 递归，如果l1值比较小，头结点就是l1，接着再对比l1.next 和 l2的 value 大小
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        // 递归，同理
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}

console.log(mergeTwoLists(l1, l2))
