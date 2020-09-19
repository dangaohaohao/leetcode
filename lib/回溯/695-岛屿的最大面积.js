/**
 * @param {number[][]} grid
 * @return {number}
 */
// 每个节点：自身关心的是，我是不是 1, 以及我上下左右是不是 1
// 出口条件: 自身为 0 2: 越界 3: 该值走过
// 时间 57.10%  空间 32.91%
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    let xLen = grid.length;
    let yLen = grid[0].length;
    if (!xLen) return maxArea;

    const dfs = (grid, x, y, currentRef) => {
        // 是否越界
        if (x < 0 || x >= xLen || y < 0 || y >= yLen) return;
        // 是否为0 是否走过
        if (grid[x][y] === 0 || grid[x][y] === 'COVER') return;

        // 长度 + 1, 标记走过
        if (grid[x][y] === 1) {
            currentRef.current++;
            grid[x][y] = 'COVER';
        }

        // 上下左右走一遍
        dfs(grid, x, y - 1, currentRef);
        dfs(grid, x, y + 1, currentRef);
        dfs(grid, x - 1, y, currentRef);
        dfs(grid, x + 1, y, currentRef);
    }

    // 找出符合 1 的值，进行 dfs
    for (let x = 0; x < xLen; x++) {
        for (let y = 0; y < yLen; y++) {
            if (grid[x][y] === 1) {
                // 用对象存储长度
                let currentRef = {
                    current: 0,
                }
                dfs(grid, x, y, currentRef);
                maxArea = Math.max(maxArea, currentRef.current);
            }
        }
    }

    return maxArea;

};