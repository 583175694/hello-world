/**
 * @最小栈
 */
var MinStack = function () {
    this.items = []
    this.mins = [Infinity]
}

MinStack.prototype.push = function (val) {
    this.items.push(val)
    this.mins.push(Math.min(this.mins[this.mins.length - 1], val))
}

MinStack.prototype.pop = function () {
    this.items.pop()
    this.mins.pop()
}

MinStack.prototype.top = function () {
    return this.items[this.items.length - 1]
}

MinStack.prototype.getMin = function () {
    return this.mins[this.mins.length - 1]
}