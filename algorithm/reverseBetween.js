/**
 * @反转链表 II
*/

var reverseBetween = function(head, left, right) {
    // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;
    // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    // 建议写在 for 循环里，语义清晰
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    // 第 3 步：切断出一个子链表（截取链表）
    let leftNode = pre.next;
    let curr = rightNode.next;

    // 注意：切断链接
    pre.next = null;
    rightNode.next = null;

    // 第 4 步：反转链表，leftNode是队尾，rightNode变成了队首
    reverseLinkedList(leftNode);

    // 第 5 步：接回到原来的链表中
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};

const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}