// 翻转一棵二叉树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 时间 92.69% 空间 54.50%

var invertTree = function (root) {

    let tmpTreeNode = new TreeNode();

    const reverse = (root) => {
        if (!root) return
        tmpTreeNode = root.left;
        root.left = root.right;
        root.right = tmpTreeNode;
        reverse(root.left);
        reverse(root.right);
    }

    reverse(root);

    return root;

};