/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
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

var head = array2list([1]),
  n = 1
var removeNthFromEnd = function (head, n) {
  var preHead = new ListNode()
  preHead.next = head
  var p = preHead
  var q = preHead
  p.next = head
  q.next = head

  for (let i = 0; i < n + 1; i++) {
    q = q.next
  }

  while (q != null) {
    q = q.next
    p = p.next
  }

  p.next = p.next.next
  return preHead.next
}

console.log(removeNthFromEnd(head, n))
