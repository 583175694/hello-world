/**
 * @链表
 */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 插入到链表尾部
  append(val) {
    let node = new Node(val)

    // 添加新节点
    if (this.length === 0) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.length += 1
  }

  // 插入到链表指定位置
  insert(position, val) {
    if (position < 0 || position > this.length) {
      return null
    }

    let node = new Node(val)

    if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      let index = 0
      let prev = null
      let current = this.head

      while (index++ < position) {
        prev = current
        current = current.next
      }
      node.next = current
      prev.next = node
    }
    this.length += 1

    return true
  }

  // 删除指定节点
  remove(position) {
    if (position < 0 || position > this.length) return null

    let current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      let index = 0
      let prev = null

      while (index++ < position) {
        prev = current
        current = current.next
      }

      // 此时index == position，prev 是当前节点的上一个节点，current.next是当前节点的下一个节点
      prev.next = current.next

      this.length -= 1
      return current.val
    }
  }

  // 更新指定节点
  update(position, val) {
    console.log(this.length)
    if (position < 0 || position >= this.length) return false

    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }

    current.val = val

    return true
  }

  // 转化为字符串
  toString() {
    let current = this.head
    let str = ''

    while (current) {
      str = str + current.val + ' '
      current = current.next
    }

    return str
  }
}

let list = new LinkList()

list.append('123')
list.append('abc')
list.append('456')

console.log(list.length)

list.remove(2)
console.log(list.length)

console.log(list.toString())

list.insert(0, '789')

console.log(list.length)

console.log(list.toString())

list.update(2, 'xyz')

console.log(list.toString())