/**
* @重写bind
* */

(proto => {
    function myBind(thisArg, ...args) {
        /*
        * this是func
        * thisArg是module
        * */
        let _this = this;
        thisArg = thisArg === undefined ? window : thisArg;
        let type = typeof thisArg
        if (!/^(object|function)$/.test(type)) {
            /*
            * 如果不是对象或者函数，把数据类型转换成对象
            * */
            thisArg = Object(thisArg)
        }

        /*
        * 将a的this，指向module，那么就拥有了module的作用域
        * 返回an函数赋值给a1，所以执行a1传递的参数就是innerArgs
        * */
        return function an(...innerArgs) {
            return _this.call(thisArg, ...args.concat(innerArgs));
        }
    }
    proto.myBind = myBind;
})(Function.prototype)

const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const a = module.getX;

console.log(
    a() // this指向window，没有x这个变量，返回undefined
);

const a1 = a.myBind(module);
console.log(
    a1() // this指向module，返回42
);
