/**
 * @仿写call
 */

(proto => {
    function myCall(thisArgs, ...args) {
        thisArgs = thisArgs === undefined ? window : thisArgs
        const type = typeof thisArgs
        if (!/^(object|function)$/.test(type)) {
            thisArgs = Object(thisArgs)
        }

        const key = Symbol('key')
        thisArgs[key] = this
        const result = thisArgs[key](...args)
        delete thisArgs[key]
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

