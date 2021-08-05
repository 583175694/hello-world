/**
 * @相交链表
 */
var getIntersectionNode = function(headA, headB) {
    let visited = new Set()
    let cur = headA
    while (cur) {
        visited.add(cur)
        cur = cur.next
    }

    cur = headB
    while (cur) {
        if (visited.has(cur)) {
            return cur
        }
        cur = cur.next
    }
    return null
}