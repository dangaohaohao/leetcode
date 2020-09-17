// 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    // 解题思路：从边界O 入手
    // 出口条件: 1: 越界 2: 值为 X 3: 以及走过   对符合条件的地方进行标记
    // 最后一遍遍历，如果标记，则 O 否则为 X
    let xLen = board.length;
    if (!xLen) return board;
    let yLen = board[0].length;

    const dfs = (board, x, y) => {
        // 越界
        if (x < 0 || x >= xLen || y < 0 || y >= yLen) return

        // 值为 X / 已经走过
        if (board[x][y] === 'X' || board[x][y] === 'COVER') return

        board[x][y] = 'COVER';

        dfs(board, x, y - 1);
        dfs(board, x, y + 1);
        dfs(board, x - 1, y);
        dfs(board, x + 1, y);

        return
    }

    for (let i = 0; i < xLen; i++) {
        for (let j = 0; j < yLen; j++) {
            // 从边界 O 下手
            if (board[i][j] === 'O' && (i === 0 || i === xLen - 1 || j === 0 || j === yLen - 1)) {
                dfs(board, i, j);
            }
        }
    }

    // 标记过的全部改为 O, 其余为 X
    for (let i = 0; i < xLen; i++) {
        for (let j = 0; j < yLen; j++) {
            if (board[i][j] === 'COVER') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }

    return board;
};