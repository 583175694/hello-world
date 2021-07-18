/**
 * @合并K个排序链表
 */
const lists = [array2list([1, 4, 5]), array2list([1, 3, 4]), array2list([2, 6])]

var mergeKLists = function (lists) {
    if (!lists.length) return null
    if (lists.length === 1) return lists[0]

    l1 = lists.pop()
    l2 = lists.pop()

    var mergeTwoLists = function (l1, l2) {
        if (l1 === null) {
            return l2
        } else if (l2 === null) {
            return l1
        } else if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next)
            return l2
        }
    }
    lists.push(mergeTwoLists(l1, l2))

    return mergeKLists(lists)
}

console.log(mergeKLists(lists))

function array2list(ary) {
    if (!ary.length) {
        return null
    }

    var node
    var head = new ListNode(ary[0])
    var pnode = head //pnode变量用来保存前一个节点

    for (var i = 1; i < ary.length; i++) {
        node = new ListNode(ary[i])
        pnode.next = node //将前一个节点的next指向当前节点
        pnode = node //将node赋值给pnode
    }

    return head
}

function ListNode(val) {
    this.val = val
    this.next = null
}