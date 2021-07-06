// // 1.对象文本和属性
// let user = {
//   name: "hang",
//   age: 18,
// }

// user.address = "China"
// console.log("=====>>>>> add address", user)
// delete user.age
// console.log("=====>>>>> delete age", user)
// user.name = "aniee"
// console.log("=====>>>>> change name", user)
// console.log("=====>>>>> find name", user.name)

// // 2.方括号
// let user = {
//   name: "hang",
//   "my interest": ["coding", "basketball", "lol"],
// }

// console.log("=====>>>>> find my interest", user["my interest"])
// delete user["my interest"]
// console.log("=====>>>>> delete my interest", user)
// let key = "name"
// user[key]
// user[key] = "aniee"
// console.log("=====>>>>> find name", user)

// // 3.计算属性
// let key = "name"
// let inputKey = prompt("请输入key", "age")
// let user = {
//   [key]: "leo",
//   [inputKey]: 18,
// }
// console.log("=====>>>>> find name", user)
// let key = prompt("请输入key", "age")
// let user = {
//     ['my_' + key]: "hang",
// }
// console.log("=====>>>>> find my_name", user)

// // 4.属性名简写
// let name = 'hang'
// let age = 18
// let user = { name: name, age: age }
// console.log("=====>>>>> user", user)
// let user1 = { name, age }
// console.log("=====>>>>> user1", user1)

// // 5.对象属性存在性检测
// // 5.1使用in关键词
// let user = {name: 'hang'}
// console.log(
//     "name" in user, // true
//     name in user, // false
//     "age" in user, // false
//     "toString" in user // true 继承属性
// )

// // 5.2使用对象hasOwnProperty方法
// let user = { name: "hang" }
// console.log(
//   user.hasOwnProperty("name"), // true
//   user.hasOwnProperty("age"), // false
//   user.hasOwnProperty("toString") // true 继承属性
// )

// // 5.3用undefined判断
// let user = { name: "hang" }
// console.log(
//     user.name !== undefined,
//     user.age !== undefined,
//     user.toString !== undefined
// )

// // 6.对象循环遍历
// // 6.1 for..in..
// let user = {
//     name: "hang",
//     age: 25,
//     height: 182,
//     weight: 150
// }

// for (let k in user) {
//     console.log(k, user[k])
// }

// // 6.2 ES7新增
// console.log(
//     Object.keys(user), // 返回key数组
//     Object.values(user), // 返回value数组
//     Object.entries(user) // 返回["key", "value"]数组
// )

// // 手动实现Object.entries()方法
// function entries(obj) {
//     let arr = []
//     for (let k in obj) {
//         arr.push([k, obj[k]])
//     }
//     return arr
// }

// console.log(
//     entries(user)
// )

// // 6.3 Object.getOwnPropertyNames(Obj)
// console.log(
//     Object.getOwnPropertyNames(user)
// )

// let user
// console.log(user ?? "Annie") // Annie

// let user = "Hang"
// console.log(user ?? "Annie") // Hang

// let user = ""
// console.log(user ?? "Annie") // ""

// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

// 6.对象循环遍历
// 6.1 for..in..
// let user = {
//     name: "hang",
//     age: 25,
//     height: 182,
//     weight: 150
// }

let user = new Map()
user.set('name', '彭于晏')
user.set('age', 25)

for (let v of user) {
  console.log(v)
}

for (let k in user) {
    console.log(k, user[k])
}

