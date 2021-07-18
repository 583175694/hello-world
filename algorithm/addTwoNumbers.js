/**
 * @两数相加
 * */

const l1 = array2list([9, 9, 9, 9, 9, 9, 9])
const l2 = array2list([9, 9, 9, 9])

var addTwoNumbers = function (l1, l2) {
    var pre = new ListNode(0)
    var cur = pre;
    var carry = 0;

    while (l1 || l2) {
        var li1 = l1 === null ? 0 : l1.val
        var li2 = l2 === null ? 0 : l2.val
        var sum = li1 + li2 + carry

        console.log(li2)

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

    return pre.next
}

console.log(addTwoNumbers(l1, l2))


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

function ListNode(val) {
    this.val = val
    this.next = null
}