/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态转移, 状态转移方程
// 每个房子有偷或不偷两种状态
// 解题思路: 
// 1: stealNow = nums[i] + nums[i + 2]
// 2: stealNext = nums[i + 1]
// 比较偷盗哪间房子的金额更大
// 70.91%  30.37%

var rob = function (nums) {
    if (!nums || nums.length === 0) return 0;

    let dp = new Array(nums.length + 1);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    //  dp[2] = Math.max(nums[0] + nums[2], nums[1]);
    dp[2] = Math.max(dp[0] + nums[2], dp[1]);

    for (let i = 3; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    return dp[nums.length - 1];
};