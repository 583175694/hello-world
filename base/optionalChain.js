// 可选链 ?. 是一种 访问嵌套对象属性的防错误方法 。即使中间的属性不存在，也不会出现错误。
// 如果可选链 ?. 前面部分是 undefined 或者 null，它会停止运算并返回 undefined。
const annie = {}
console.log(annie?.name?.toString()) // undefined

const dom = document?.getElementById("dom")?.innerHTML // undefined
console.log(dom)

// 不用 ?.
const annie1 = {}
console.log(annie1.name.toString()) // Uncaught TypeError: Cannot read property 'toString' of undefined

const dom1 = document.getElementById("dom").innerHTML // Uncaught TypeError: Cannot read property 'innerHTML' of null
console.log(dom1)

// 使用注意
// 1.不能过度使用可选链
const annie = {}
console.log(annie.name?.toString()) // 这样写回更好，因为annie对象必须存在，而name属性可能不存在

// 2.可选链?.之前的变量必须已声明
hang?.name // Uncaught ReferenceError: hang is not defined

// 3.可选链不能用于赋值
let object = {}
object?.property = 1 // // Uncaught SyntaxError: Invalid left-hand side in assignment

// 4.可选链访问数组元素的方法
let item = arr?.[4]

// 可选链可以调用一个可能不存在的函数
let user1 = {
    admin() {
        console.log('success')
    }
}

let user2 = {}

user1.admin?.() // success
user2.admin?.()

// 允许从一个可能不存在的对象上安全地读取属性
let user1 = {
    name: "hang"
}

let user2 = null

let key = "name"

console.log(user1?.[key]) // hang
console.log(user2?.[key]) // undefined
