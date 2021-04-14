/**
 * @栈
*/
class ArrayStack {
    constructor(n) {
        this.items = new Array()// 定义数组大小
        this.n = n
        this.counts = 0
    }

    push (item) {
        if (this.counts === this.n) return false
        this.items[this.counts] = item
        ++this.counts
        return true
    }

    pop () {
        if (this.counts === 0) return null
        let tmp = this.items[this.counts - 1]
        --this.counts
        return tmp
    }
}

const stack = new ArrayStack(3)

console.log(stack.push(1), stack)
console.log(stack.push(2), stack)
console.log(stack.pop(), stack)