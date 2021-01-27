// 1.对象方法
let user = {}
let say = function () {
    console.log("Hello!")
}

user.say = say
user.say()

// 更简洁的方法
let user = {
    say: function () {
        // ..
    },
    say1() {
        // ..
    },
    async say2() {
        // ..
    }
}

// 支持计算属性命名
let hello = "hello"
let user = {
    ['say_' + hello]() {
        console.log('Hello!')
    }
}
user['say_' + hello]()

// 所有方法定义不是构造函数，如果您尝试实例化它们，将抛出TypeError。
let user = {
    say() {
        // ..
    }
}
new user.say // Uncaught TypeError: user.say is not a constructor

// 2.this
// 2.1当对象方法需要使用对象中的属性，可以使用this关键字
let user = {
    name: 'annie',
    say() {
        console.log(`hello, ${this.name}`)
    }
}
user.say() // hello, annie

// 2.2 this取值
// this永远指向最后调用它的那个对象！！
let user = {
    name: "annie"
}

let admin = {
    name: "admin"
}

let say = function () {
    console.log(`hello, ${this.name}`)
}

user.fun = say
admin.fun = say

user.fun()
admin.fun()
admin["fun"]()

// 2.3 改变this的指向——箭头函数
// 箭头函数的this始终指向函数定义时时的this，而非执行时
// 箭头函数的this绑定的是最近一层非箭头函数的this
let user = {
    name: "annie",
    say: () => {
        console.log(this) // 指向window
    },
    talk() {
        let fun = () => {
            console.log(this) // 指向user
        }
        fun()
    }
}

user.say()
user.talk()

// 2.4 call/apply/bind
let user = {
    name: "annie"
}
name = "hang"

function fun(a, b) {
    return console.log(this.name, a, b)
}

fun('is', 'fashion') // hang is fashion
fun.call(user, 'is', 'fashion') // annie is fashion 跟apply传参方式不同
fun.apply(user, ['is', 'fashion']) // annie is fashion 跟call传参方式不同

