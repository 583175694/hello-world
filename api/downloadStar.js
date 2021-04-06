class ArrayQueue {
  constructor(n) {
    this.items = new Array() // 数组
    this.n = n // 数组大小
    this.head = 0 // 队列头下标
    this.tail = 0 // 队列尾下标
  }

  enqueue(item) {
    // 队列末尾没有空间了
    if (this.tail === this.n) {
      if (this.head == 0) return false
      // 数据搬移
      for (let i = this.head; i < this.tail; ++i) {
        // 所有还存在在数组中的元素，往前搬head位
        this.items[i - this.head] = this.items[i]
      }
      // 搬移完之后重新更新head和tail
      this.tail -= this.head
      this.head = 0
    }
    this.items[this.tail] = item
    ++this.tail
    return true
  }

  dequeue() {
    // 队列为空
    if (this.tail === this.head) return null
    const ret = this.items[this.head]
    ++this.head
    return ret
  }

  isNull() {
    return this.tail === this.head
  }
}

const throttle = function (func, wait) {
  let canRun = true

  return function (...args) {
    if (!canRun) return

    canRun = false
    setTimeout(() => {
      func.apply(this, ...args)
      canRun = true
    }, wait)
  }
}
const dom = document.getElementsByTagName('body')[0]

const arrayQueue = new ArrayQueue(document.getElementsByClassName('item').length)

function traversal(node) {
  if (node.nodeType === 1 && node.getAttribute('class') === 'item') {
    arrayQueue.enqueue(node)
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    let item = node.childNodes[i]
    if (item.nodeType === 1) {
      traversal(item)
    }
  }
}

traversal(dom)

async function run() {
  const ret = arrayQueue.dequeue()
  const a = function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ret.click()
        console.log('===>>>打开' + ret.lastChild.innerHTML)
        resolve()
      }, 1500)
    })
  }
  const b = function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let download = document.getElementsByClassName('download')[0]
        download.click()
        console.log('===>>>点击下载')
        resolve()
      }, 1500)
    })
  }
  const c = function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let layer = document.getElementsByClassName('file-preview-container')[0]
        layer.click()
        console.log('===>>>关闭弹窗')
        resolve()
      }, 1500)
    })
  }

  await a()
  await b()
  await c()

  !arrayQueue.isNull() && run()
}
run()