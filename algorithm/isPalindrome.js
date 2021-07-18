/**
 * @回文链表
 * @param {ListNode} head
 * @return {boolean}
 */

const head = array2list([1, 4, 4, 1])

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

var isPalindrome = function(head) {
  var fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  if (fast !== null) {
    slow = slow.next
  }

  slow = reverseList(slow)
  fast = head

  while (slow) {
    if (slow.val !== fast.val) {
      return false
    }
    slow = slow.next
    fast = fast.next
  }

  return true
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

console.log(isPalindrome(head))