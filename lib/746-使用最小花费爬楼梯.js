/**
 * @param {number[]} cost
 * @return {number}
 */
// dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
// dp[i] 代表的是到达这一步需要花费多少，cost 代表的是往上走需要花费多少
let minCostClimbingStairs = function (cost) {
    let len = cost.length;
    let dp = new Array(len + 1).fill(0);

    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[len];
};