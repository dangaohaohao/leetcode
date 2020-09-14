// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

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
// 递归算法 时间59.53%  空间5.29%
const inorderTraversal = (root) => {
    let res = [];
    const handleMiddleSort = (node) => {
        if (!node) return
        handleMiddleSort(node.left);
        res.push(node.val);
        handleMiddleSort(node.right);
    }
    handleMiddleSort(root);
    return res;
};

// 迭代算法 自己实现栈 时间 59.53%  空间 5.29%
const inorderTraversal = (root) => {
    let res = [];
    let stack = [];

    // 不断把左子树压入
    while (root) {
        stack.push(root);
        root = root.left;
    }

    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) {
            node = node.right;
            while (node) {
                stack.push(node);
                node = node.left;
            }
        }
    }

    return res;
};

// 颜色标记法
// 如果是白色，就把节点右子树, 节点，节点左子树入栈
// 如果是灰色，则对当前节点进行处理
// 这种就是前中后序遍历只需要调用一下位置就好了
// 时间 33.24%  空间 5.29%

const inorderTraversal = (root) => {
    const white = 1;
    const gray = 0;
    let res = [];

    if (!root) return res;

    let stack = [
        [white, root]
    ];

    while (stack.length) {
        const [color, node] = stack.pop();
        if (color) {
            node.right && stack.push([white, node.right]);
            stack.push([gray, node]);
            node.left && stack.push([white, node.left]);
        } else {
            res.push(node.val);
        }
    }

    return res;
};