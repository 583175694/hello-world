/**
 * @队列
 * */

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
}

const queue = new ArrayQueue(3)
