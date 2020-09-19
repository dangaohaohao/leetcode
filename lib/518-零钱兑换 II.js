// 518-零钱兑换 II
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 时间99.09%  空间56.85%

var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    // 用 coins 来凑 amount, 以免有重复组合
    for (let coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (i >= coin) {
                dp[i] += dp[i - coin]
            }
        }
    }

    return dp[amount];
};