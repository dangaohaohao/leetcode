// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。
// https://leetcode-cn.com/problems/combination-sum-ii

// 理解: 见 assets 中组合总合2手绘图
// 1: 元素不可重复选择, 传递为 i+1, 下一层即可从 i+1 开始, 一层剪枝
// 2: candidates[i] === candidates[i - 1] 二层剪枝
// 3: 受当前元素不可重复影响

// 时间66.50 % 空间47.77 %
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let listAll = [];
    if (target < candidates[0]) return listAll;
    const dfs = (listAll, candidates, target, tmp, num) => {
        if (target === 0) {
            listAll.push(tmp);
            return
        }
        if (target < candidates[0]) return
        for (let i = num, len = candidates.length; i < len && target >= candidates[i]; i++) {
            // 双重剪枝 以免排序后前后值相同，出现重复组合
            if (i > num && candidates[i] === candidates[i - 1]) continue
            dfs(listAll, candidates, target - candidates[i], [...tmp, candidates[i]], i + 1);
        }
    }
    dfs(listAll, candidates, target, [], 0);
    return listAll;
};