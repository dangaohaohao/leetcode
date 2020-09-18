// 343-整数拆分
// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
/**
 * @param {number} n
 * @return {number}
 */
// 递归写法，超出时间
// var integerBreak = function (n) {
//     // 得到输入值的所有可加项(至少两个，说明除了自身)
//     // 出口条件，target 为 0
//     // 所有可加项相乘，最大

//     let max = 0;

//     const getMulti = (arr) => {
//         return arr.reduce((pre, cur) => pre * cur);
//     }

//     const dfs = (target, tmpArr) => {
//         if (target < 0) return
//         // 达到了目标值, 获得乘值, 与 max 比较保存最大值
//         if (target === 0) {
//             let multi = getMulti(tmpArr);
//             max = Math.max(max, multi);
//             return
//         }

//         for (let i = 1; i < n; i++) {
//             dfs(target - i, [...tmpArr, i]);
//         }
//     }

//     dfs(n, []);

//     return max;
// };


/**
 * @param {number} n
 * @return {number}
 */
// 动态规划, 用数组保存, 找到每个值的最大乘积 时间 67.59% 空间 5.11%
var integerBreak = function (n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j < i; j++) {
            // 目标是 dp[i], 即 i, j * (i - j), (i - j) 部分可拆或不拆
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
};