/**
* @重写apply
* */

(proto => {
    function myApply(thisArg, [...args]) {
        thisArg = thisArg === undefined ? window : thisArg
        let type = typeof thisArg
        if (!/^(object|function)$/.test(type)) {
            /*
            * 如果不是对象或者函数，把数据类型转换成对象
            * */
            thisArg = Object(thisArg)
        }
        const key = Symbol('key')
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
        *  参数是myCall传入的参数 args
        * */
        const result = thisArg[key](...args)
        /*
        *  删除Food里新增的key属性，返回result
        * */
        delete thisArg[key]
        return result
    }
    proto.myApply = myApply
})(Function.prototype)


function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.myApply(this, [name, price]);
    this.category = 'food';
}

const food = new Food('apple', 2)
console.log(food.name, food.price);
