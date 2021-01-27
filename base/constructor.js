// 构造函数
function User (name) {
    this.name = name
    this.isAdmin = false
}

const annie = new User('annie')
console.log(annie.name, annie.isAdmin)

/*
* new运算符操作过程
* 1.创建一个新的空对象
* 2.将函数作用域赋值给新对象（this指向新对象）
* 3.执行构造函数中的代码（为这个对象添加新属性）
* 4.返回这个新对象
* */

// 构造函数也可以将方法绑定到this
function User1 (name) {
    this.name = name
    this.isAdmin = false
    this.sayHello = function () {
        console.log(`hello, ${this.name}`)
    }
}

const hang = new User1('hang')
hang.sayHello()
