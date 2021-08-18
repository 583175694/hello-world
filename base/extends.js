// 原型链继承
function Person(name) {
    this.name = name
}

Person.prototype.getName = function () {
    return this.name
}

function Child() {}

Child.prototype = new Person('kevin')

let child = new Child()
console.log(child.getName()) // kevin

// 借用构造函数 - 经典继承
function Parent (name) {
    this.name = name
}

function Child (name) {
    Parent.call(this, name)
}

const child1 = new Child('hang')
const child2 = new Child('annie')
console.log(child1.name) // "hang"
console.log(child2.name) // "annie"

// 组合继承
function Parent (name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
    return this.name
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

Child.prototype = new Parent()
Child.constructor = Child

let child1 = new Child('hang', '25')
child1.colors.push('yellow')

console.log(
    child1.name, // 'hang'
    child1.age, // 25
    child1.colors // ['red', 'blue', 'green', 'yellow']
)

let child2 = new Child('annie', '23')
console.log(
    child2.name, // 'annie'
    child2.age, // 23
    child2.colors // ['red', 'blue', 'green']
)

// 原型式继承
function createObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

function createObj(o) {
    function F() {}
    F.prototype = o
    return new F()
}

// 寄生组合式继承
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = Object.create(Parent.prototype)

let child = new Child('hang', 25)
console.log(child)  // Parent { name: 'hang', colors: [ 'red', 'blue', 'green' ], age: 25 }