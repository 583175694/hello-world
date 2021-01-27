/**
* @重写call
* */

(proto => {
    function myCall (thisArg, ...args) {
        /* thisArg是传入参数(Food) */
        thisArg = thisArg === undefined ? window : thisArg
        let type = typeof thisArg
        if (!/^(object|function)$/.test(type)) {
            /*
            * 如果不是对象或者函数，把数据类型转换成对象
            * */
            thisArg = Object(thisArg)
        }
        let key = Symbol('key')
         /*
         *  这里this指向调用他那个函数(Product)
         *  thisArg[key]也就是Food[key]，相当于
         *  function Food(name, price) {
         *      this.key = new Product()
         *  }
         *  那么Food就有了name，price属性
         * */
        thisArg[key] = this
        /*
        *  这里相当于执行了Product(name, price)
        *  参数是myCall传入的参数 ...args
        * */
        let result = thisArg[key](...args)

        /*
        *  删除Food里新增的key属性，返回result
        * */
        delete thisArg[key]
        return result
    }
    proto.myCall = myCall
})(Function.prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.myCall(this, name, price);
    this.category = 'food';
}

const food = new Food('cheese', 5)
console.log(food.name, food.price);

