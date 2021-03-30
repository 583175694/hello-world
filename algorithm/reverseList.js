/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const head = array2list([1, 2, 3, 4, 5])

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
console.log(reverseList(head))
