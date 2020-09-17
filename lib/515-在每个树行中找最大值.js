/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 时间68.89%  空间5.21%
var largestValues = function (root) {
    // 左边右边有值，对比，得到max，push
    // 用临时数组保存左右子树，用完一个shift一个
    let resArr = [];
    if (!root) return resArr;

    // 获取同一层的最大值
    const getMax = (nodeArr) => {
        let max = -Infinity;
        while (nodeArr.length) {
            let node = nodeArr.shift();
            if (node) max = Math.max(max, node.val);
        }
        return max;
    }

    const bfs = (nodeArr) => {
        if (!nodeArr || !nodeArr.length) return;
        let res = getMax([...nodeArr]);
        resArr.push(res);
        let tmpNode = [];
        while (nodeArr.length) {
            let node = nodeArr.shift();
            if (node) {
                node.left && tmpNode.push(node.left);
                node.right && tmpNode.push(node.right);
            }
        }
        bfs(tmpNode); // 如果放在 while 里面，左右子树的值对比就分开了
    }

    bfs([root]);

    return resArr;
};