/**
 * @链表的中间结点
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

function ListNode(val) {
  this.val = val
  this.next = null
}

const head = array2list([1, 2, 3, 4, 5, 6])

var middleNode = function(head) {
    var preHead = new ListNode()
    var arr = []

    preHead.next = head
    while (preHead) {
        arr.push(head.val)
        preHead = preHead.next
    }

    var n = Math.round(arr.length / 2)
    for (let i = 0; i < n - 1; i++) {
        head = head.next
    }

    return head
}

console.log(middleNode(head))