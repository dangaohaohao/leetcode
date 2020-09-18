// 279-完全平方数
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

/**
 * @param {number} n
 * @return {number}
 */
// 递归解法 超出时间限制
// var numSquares = function (n) {
//     // 方案一：
//     // 循环，找出 target 之前的完全平方数 O(logn) squareArr
//     // 从 squareArr 中找，找出让组成和完全平方数个数少的解个数

//     let res = Infinity;
//     let squareArr = [];

//     for (let i = 1; i * i <= n; i++) {
//         // n 本身就是完全平方数, 最少和个数为 1
//         if (i * i === n) return 1;
//         squareArr.push(i * i);
//     }

//     const dfs = (squareArr, target, tmpArr) => {
//         if (target < 0) return
//         // 找到解 对比个数
//         if (target === 0) {
//             res = Math.min(res, tmpArr.length);
//         }
//         for (let i = 0; i < squareArr.length; i++) {
//             dfs(squareArr, target - squareArr[i], [...tmpArr, squareArr[i]]);
//         }
//     }

//     dfs(squareArr, n, []);

//     return res;

// };

// 解题思路: n 最优解 = n' + 1(这是一个完全平方数的个数)
// 动态规划 n = i * i + n'; n' = i * i + n';
// 所以, n 的最优解 = n' 的最优解 + 1;
var numSquares = function (n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = Infinity;
        for (let j = 1; j * j <= i; j++) {
            // i = j * j + 另一个整数n'
            dp[i] = Math.min(dp[i], dp[i - (j * j)] + 1);
        }
    }

    return dp[n];
};