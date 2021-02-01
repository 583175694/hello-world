/**
 * @数据类型检测
 * */

function toType(obj) {
    let class2type = {};
    ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"].forEach(item => {
            class2type["[object " + item + "]"] = item.toLowerCase();
        });
    if (obj == null) return obj + "";
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[class2type.toString.call(obj)] || "object" :
        typeof obj;
}

let obj = function () {};
console.log(toType(obj))
