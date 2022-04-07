/**
 * @红绿灯
*/

function red() {
    console.log('red')
}

function green() {
    console.log('green')
}

function yellow() {
    console.log('yellow')
}

function light(timer, callback) {
    return new Promise((resolve, reject) => {
        callback()
        setTimeout(() => {
            resolve()
        }, timer);
    })
}

var step = function() {
    Promise.resolve().then(() => {
        return light(3000, red)
    }).then(() => {
        return light(1000, green)
    }).then(() => {
        return light(2000, yellow)
    }).then(() => {
        step()
    })
}

step()