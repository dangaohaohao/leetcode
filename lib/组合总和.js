// 给定一个无重复元素的数组 candidates 和一个目标数 target， 找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
// 链接：https: //leetcode-cn.com/problems/combination-sum
// 参考 https://leetcode-cn.com/problems/combination-sum/solution/39-zu-he-zong-he-by-shu-cheng/
// 一个保存，一个当工具人，一个记录防止重复 出口条件 target === 0
// 时间 46.46%  空间 44.00%

var combinationSum = function (candidates, target) {
    const find = (listAll, tmp, candidates, target, num) => {
        if (target === 0) {
            listAll.push(tmp);
            return;
        }
        if (target < candidates[0]) return
        for (let i = num; i < candidates.length && candidates[i] <= target; i++) {
            // 以免影响下一次的遍历
            let temList = [...tmp];
            temList.push(candidates[i]);
            find(listAll, temList, candidates, target - candidates[i], i);
        }
    }
    let listAll = [];
    let list = [];
    candidates.sort((a, b) => a - b)
    find(listAll, list, candidates, target, 0);
    return listAll;
};