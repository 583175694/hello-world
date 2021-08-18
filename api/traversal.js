/**
 * @遍历节点
 * */

function traversal(node, arr) {
    arr = arr || []
    /**
     * nodeType属性：1 => 元素，2 => 属性，3 =>文本，8 => 注释，9 => 文档
     * 如果是元素的话，直接输出标签名
     * */
    if (node.nodeType === 1) {
        arr.push(node.tagName.toLowerCase)
    }

    /**
     * 遍历子节点，如果节点存在子节点，且nodeType === 1，递归
     * */
    for (let i = 0; i < node.childNodes.length; i++) {
        let item = node.childNodes[i]
        if (item.nodeType === 1) {
            traversal(item, arr)
        }
    }

    return arr
}

var node = document.getElementsByTagName('html')[0]

traversal(node)

