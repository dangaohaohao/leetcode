// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
// https://leetcode-cn.com/problems/combination-sum-iii/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 时间 73.87% 空间 29.00%

var combinationSum3 = function (k, n) {
    let listAll = [];
    const dfs = (listAll, limit, target, tmpArr, num) => {
        if (target === 0) {
            if (tmpArr.length === limit) {
                listAll.push(tmpArr);
                return;
            }
        }
        if (tmpArr.length >= limit) return
        for (let i = num; i <= 9 && target >= i; i++) {
            if (tmpArr.indexOf(i) !== -1) continue
            dfs(listAll, limit, target - i, [...tmpArr, i], i + 1);
        }
    }
    dfs(listAll, k, n, [], 1);
    return listAll;
};