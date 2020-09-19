// https: //leetcode-cn.com/problems/average-of-levels-in-binary-tree/submissions/
// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 时间 58.70%  空间82.91%
var averageOfLevels = function (root) {
    let resList = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let sum = 0;
        let count = queue.length;
        for (let i = 0; i < count; i++) {
            const node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        resList.push(sum / count);
    }
    return resList;
};