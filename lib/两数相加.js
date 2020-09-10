// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 时间 32.34% 空间 15.04%
var addTwoNumbers = function (l1, l2) {
    // carry 来表示进位，因为每位数范围都是 0 - 9，可能会存在溢出, 值只有可能是 0 / 1
    // 很容易遗漏最后一位 carry 判断
    const deadHead = new ListNode('deadHead');
    let carry = 0;
    let current = deadHead;
    let sum = 0;
    while (l1 || l2) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        sum = x + y + carry;
        const currNode = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        current.next = currNode;
        current = current.next;
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    if (carry) {
        const currNode = new ListNode(carry);
        current.next = currNode;
    }
    return deadHead.next;
};

// 时间 17.22% 空间 8.82%
var addTwoNumbers = function (l1, l2) {
    // carry 来表示进位，因为每位数范围都是 0 - 9，可能会存在溢出
    // 很容易遗漏最后一位 carry 判断
    const deadHead = new ListNode('deadHead');
    let carry = 0;
    let current = deadHead;
    let sum = 0;
    while (l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    carry && (current.next = new ListNode(carry))
    return deadHead.next;
};