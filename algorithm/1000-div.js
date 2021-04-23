/**
 * @插入1000div问题
 */
// 记录任务开始时间
let now = Date.now()
//需要插入的容器
let ul = document.getElementById('app')
// 插入十万条数据
let total = 100000
// 一次插入 20 条
let once = 20
//总页数
let page = total / once
//每条记录的索引
let index = 0

//循环加载数据
function loop(curTotal, curIndex) {
    if (curTotal <= 0) {
        return false
    }
    //每页多少条
    let pageCount = Math.min(curTotal, once)
    window.requestAnimationFrame(function () {
        let fragment = document.createDocumentFragment()
        for (let i = 0; i < pageCount; i++) {
            let li = document.createElement('div')
            li.innerText = curIndex + i + ' - ' + curTotal
            fragment.appendChild(li)
        }
        ul.appendChild(fragment)

        // 传入参数：当前总数据 - 页面条数 = 剩余总数据，当前索引 + 页面条数 = 插入后的索引
        loop(curTotal - pageCount, curIndex + pageCount)
    })
}

loop(total, index)

console.log('JS运行时间：', Date.now() - now)
setTimeout(() => {
    console.log('总运行时间：', Date.now() - now)
}, 0)
