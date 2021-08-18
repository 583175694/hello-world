// 工厂模式
function createPerson(name) {
    var o = new Object()
    o.name = name
    o.getName = function () {
        return this.name
    }

    return o
}

// 构造函数模式
function Person(name) {
    this.name = name
    this.getName = function () {
        return this.name
    }
}

// 原型模式
function Person(name) {

}

Person.prototype.name = {
    val: 'keivn'
}
Person.prototype.getName = function () {
    return this.name
}

// 原型模式优化
function Person(name) {}
Person.prototype = {
    constructor: Person,
    name: {
        val: 'keivn'
    },
    getName: function () {
        return this.name
    }
}

// 组合模式
function Person(name) {
    this.name = name
}

Person.prototype = {
    constructor: Person,
    getName: function () {
        return this.name
    }
}

// 寄生构造函数
function Person(name) {

    var o = new Object()
    o.name = name
    o.getName = function () {
        console.log(this.name)
    }

    return o

}

var person1 = new Person('kevin')
console.log(person1 instanceof Person) // false
console.log(person1 instanceof Object) // true

class Person {
    constructor(name) {
        this.name = name
    }

    getName () {
        return this.name
    }
}

const person = new Person('kevin')
console.log(person.getName())