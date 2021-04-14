/**
 * @循环队列
 * */
class CircularQueue {
  constructor(n) {
    this.items = new Array()
    this.n = n
    this.head = 0
    this.tail = 0
  }

  enqueue(item) {
    if ((this.tail + 1) % this.n === this.head) return false
    this.items[this.tail] = item
    this.tail = (this.tail + 1) % this.n
    return true
  }

  dequeue() {
    if (this.tail === this.head) return null
    const ret = this.items[this.head]
    this.head = (this.head + 1) % this.n
    return ret
  }
}


const queue = new CircularQueue(3)

console.log(queue.enqueue(1), queue)
console.log(queue.enqueue(2), queue)
console.log(queue.enqueue(3), queue)
console.log(queue.dequeue(), queue)
console.log(queue.enqueue(4), queue)
console.log(queue.dequeue(), queue)
console.log(queue.enqueue(5), queue)