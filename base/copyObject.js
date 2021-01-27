// 1.赋值操作
let obj = {
    name: 'hang',
    age: 25,
    height: 182,
    weight: 150
}

// 1.1基本数据类型赋值
let user  = "annie";
let user1 = user;
user1 = "hang";
console.log(user, user1);  // "annie" "hang"

// 1.2引用数据类型赋值
let newObj1 = obj
let newObj2 = obj

// 因为变量保存的是引用，所以newObj1、newObj2是共用obj的内存，obj修改，所有引用的都会进行修改
obj.name = "annie"
console.log(
    obj, // {name: "annie", age: 25, height: 182, weight: 150}
    newObj1, // {name: "annie", age: 25, height: 182, weight: 150}
    newObj1  // {name: "annie", age: 25, height: 182, weight: 150}
)

// 2.对象比较
// 当两个变量引用同一对象，==或===都返回true
console.log(
    'newObj1 === newObj2, result: ',
    newObj1 === newObj2
)

// 两个空对象不相等
let emptyObj1, emptyObj2 = {}
console.log(
    'emptyObj1 === emptyObj2, result: ',
    emptyObj1 === emptyObj2
)

// 3.浅拷贝
let user = { name: "hang", age: 25, skill: { JavaScript: 80, CSS: 90 }}
let mod = { name: "annie", age: 23, skill: { JavaScript: 80, CSS: 90 }}

let arr = ["annie", 25, { JavaScript: 80, CSS: 90}]

// 3.1
let user1 = user
user1.name = "hah"
console.log(
    user, // {name: "hah", age: 25}
    user1 // {name: "hah", age: 25}
)

// 3.2实现浅拷贝
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象
// 浅拷贝只是在根属性(对象的第一层级)创建了一个新的对象，但是对于属性的值是对象的话只会拷贝一份相同的内存地址
let target = Object.assign({}, user)
target.name = "hah"
target.skill.CSS = 100
console.log(
    user, // {name: "hang", age: 25, skill: {JavaScript: 80, CSS: 100}}
    target // {name: "xixi", age: 25, skill: {JavaScript: 80, CSS: 100}}
)

// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
let arr1 = Array.prototype.slice.call(arr)
arr1[0] = "hang"
arr[2]["CSS"] = 20
console.log(
    arr, // ["annie", 25, {JavaScript: 80, CSS: 20}]
    arr1 // ["hang", 25, {JavaScript: 80, CSS: 20}]
)

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
let arr1 = [{name: "hang"}, {age: 18}]
let arr2 = [{age: 20}, {address: 'shenzhen'}]
let arr3 = arr1.concat(arr2)

arr2[0]["age"] = 25
console.log(
    arr1, // [{name: "hang"}, {age: 18}]
    arr2, // [{age: 25}, {address: 'shenzhen'}]
    arr3 // [{name: "hang"}, {age: 18}, {age: 25}, {address: 'shenzhen'}]
)

// 拓展运算符(...)
let user1 = {...user}
user1.name = 'ene'

console.log(
    user, // { name: "hang", age: 25, skill: { JavaScript: 80, CSS: 90 }}
    user1 // { name: "ene", age: 25, skill: { JavaScript: 80, CSS: 90 }}
)

// 3.3手写浅拷贝
function cloneShallow(source) {
    let target = {}
    for (let k in source) {
        if (Object.prototype.hasOwnProperty.call(source, k)) {
            target[k] = source[k]
        }
    }
    return target
}

let user1 = cloneShallow(user)
user1.name = 'uu'

console.log(
    user,
    user1
)

// 4.深拷贝
// 4.1 JSON.parse(JSON.stringify())
let user = { name: "hang", age: 25, skill: { JavaScript: 80, CSS: 90 }}
let user1 = JSON.parse(JSON.stringify(user))
user1.name = 'annie'
user1.age = 23
user1.skill.JavaScript = 0

console.log(
    user, // {name: "hang", age: 25, skill: {JavaScript: 80, CSS: 90}}
    user1 // {name: "annie", age: 23, skill: {JavaScript: 0, CSS: 90}}
)

// 4.2 手写深拷贝
function cloneDeep(source) {
    if (typeof source !== 'object') return source

    let target = Array.isArray(source) ? [] : {}
    for (const k in source) {
        if (Object.prototype.hasOwnProperty.call(source, k)) {
            if (typeof source[k] === 'object') {
                target[k] = cloneDeep(source[k])
            } else {
                target[k] = source[k]
            }
        }
    }
    return target
}

let user2 = cloneDeep(user)
user2.name = 'mmm'
user2.age = 18
user2.skill.JavaScript = 60

console.log(user2)