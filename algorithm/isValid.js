/**
 * @有效的括号
*/

class ArrayStack {
  constructor(n) {
    this.items = new Array(n)
    this.n = n
    this.counts = 0
  }

  push(item) {
    if (this.counts === this.n) return false
    this.items[this.counts] = item
    this.counts++
  }

  pop() {
    if (this.counts === 0) return false
    const result = this.items[this.counts - 1]
    this.counts--
    return result
  }

  isNull() {
    return this.counts === 0
  }
}

s = "()[]{}"

var isValid = function(s) {
  const stack = new ArrayStack(Math.pow(10, 4))

  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')')
    } else if (s[i] === '{') {
      stack.push('}')
    } else if (s[i] === '[') {
      stack.push(']')
    } else {
      if (stack.pop() !== s[i]) {
        return false
      }
    }
  }
  return stack.isNull()
}

console.log(isValid(s))