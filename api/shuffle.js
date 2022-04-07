/**
 * @手写shuffle()随机打乱一个数组
*/

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        const j = i + Math.floor(Math.random() * (arr.length - i));
        console.log(Math.floor(i + Math.random() * (arr.length - i)))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

console.log(shuffle([1, 2, 3, 4]))