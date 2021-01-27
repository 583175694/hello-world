// // 对象转字符串 JSON.stringify()
// let user = {
//     name: "annie",
//     age: 25
// }
//
// console.log(JSON.stringify(user))
//
// // 对象转数字
// let date = new Date()
// console.log(Number(date))
//
// // 默认类型转换，当二元加法得到对象类型的参数时，它将依据 "default" 来对其进行转换
// let obj1 = {}
// let obj2 = {}
// let total = obj1 + obj2
// console.log(total) // [object Object][object Object]
//
// let obj1 = []
// let obj2 = []
// let total = obj1 + obj2
// console.log(total) // empty
//
// let obj1 = {}
// let obj2 = []
// let total = obj1 + obj2
// console.log(total) // [object Object]
//
// let obj1 = {}
// let obj2 = 999
// let total = obj1 + obj2
// console.log(total) // [object Object]999
//
// let user = {
//     name: "Leo",
//     money: 9999,
//
//     [Symbol.toPrimitive](hint) {
//         console.log(`hint: ${hint}`);
//         return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// };
//
// alert(user);     // 控制台：hint: string 弹框：{name: "John"}
// alert(+user);    // 控制台：hint: number 弹框：9999
// alert(user + 1); // 控制台：hint: default 弹框：10000
