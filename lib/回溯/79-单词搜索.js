// 解题参考: https://leetcode-cn.com/problems/word-search/solution/shou-hua-tu-jie-79-dan-ci-sou-suo-dfs-si-lu-de-cha/
// 回溯： 有的选择是错的，选择它，不能达到目标，所以要撤销这个选择，去尝试别的选择。

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//  时间 43.09% 空间 65.56%

var exist = function (board, word) {
    // 用同样的一个数组存放走过的点
    // 只需要关注当前点，其他交给子递归
    // reture false 的情况: 1: 当前点不存在，即超出了边界 2: 当前值已经被用过了 3: 当前点不是目标节点
    // 出口条件 word字符 走完
    const rowLen = board.length;
    const colLen = board[0].length;
    const usedArr = new Array(rowLen);
    for (let i = 0; i < usedArr.length; i++) {
        usedArr[i] = new Array(colLen).fill(false);
    }

    // 当前节点的 row, col, 以及 word 字符下标
    const canFind = (row, col, i) => {
        if (i > word.length - 1) {
            return true;
        }
        // 1: 当前点不存在
        if (row < 0 || row > rowLen - 1 || col < 0 || col > colLen - 1) {
            return false;
        }

        // 2: 当前值已经被用过了 3: 当前点不是目标节点
        if (usedArr[row][col] || board[row][col] !== word[i]) {
            return false
        }

        // 说明自身节点没问题，标记走过
        usedArr[row][col] = true;

        // 子递归，上下左右四个方向，只有上一条路不通，才会走下一条路，剪枝
        const canFindRes = canFind(row, col - 1, i + 1) || canFind(row, col + 1, i + 1) || canFind(row - 1, col, i + 1) || canFind(row + 1, col, i + 1);

        // 子递归没问题 true
        if (canFindRes) return true;

        // 默认有问题，撤回标记状态
        usedArr[row][col] = false;
        return false;
    }

    // 遍历，找到起点
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (board[i][j] === word[0] && canFind(i, j, 0)) {
                return true;
            }
        }
    }

    return false
};