// 数独是源自18世纪瑞士的一种数学游戏，是一种运用纸、笔进行演算的逻辑游戏。
// 玩家需要根据9×9盘面上的已知数字，推理出所有剩余空格的数字，
// 并满足每一行、每一列、每一个粗线宫内的数字均含1到9，不重复。

// 编写一个程序，通过已填充的空格来解决数独问题。
// 一个数独的解法需遵循如下规则：
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
// 空白格用 '.' 表示。
// Note:
// 给定的数独序列只包含数字 1-9 和字符 '.' 。
// 你可以假设给定的数独只有唯一解。
// 给定数独永远是 9x9 形式的。


// 解题思路
// 1: 找到所有空格，目前空格标记为 '.'
// 2: 找到空格的所有可能项
// 3: dfs 回溯, 不是则退回, 换下一个可能项
// 4: 出口条件: 空格数组中最后一个元素也匹配完成, ok

const solveSudoku = board => {
    const getNums = (i, j) => {
        let set = new Set('.')
        let x = (i / 3 >> 0) * 3,
            y = (j / 3 >> 0) * 3
        for (let k = 0; k < 9; k++) {
            set.add(board[i][k]).add(board[k][j]).add(board[x][y])
            y++
            if (y % 3 === 0) {
                x += 1
                y -= 3
            }
        }
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            .filter(n => !set.has(n))
    }
    const dfs = (index) => {
        let [x, y] = arr[index]
        const nums = getNums(x, y)
        for (let k = 0; k < nums.length; k++) {
            board[x][y] = nums[k]
            if (index === arr.length - 1 && nums.length === 1) return true
            if (dfs(index + 1)) return true
            board[x][y] = '.'
        }
        return false
    }
    let arr = []
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') arr.push([i, j])
        }
    }
    dfs(0)
    return board
}