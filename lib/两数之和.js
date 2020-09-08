// 两数之和，最佳实践，字典存补位, 采用哈希映射, 以空间换取速度 https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-leetcode-2/

// 时间击败 17% O(n^2) 空间击败 66% O(1)
// var twoSum = function (nums, target) {
//     for (let i = 0, len = nums.length; i < len; i++) {
//         let j = nums.indexOf(target - nums[i]);
//         if (j !== -1 && j !== i) {
//             return [i, j];
//         }
//     }
// };

// 时间击败了 71.30%  O(n)  空间击败 5% O(n)利用字典 以空间换取速度
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.get(nums[i]) || map.get(nums[i]) === 0) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i)
    }
    throw new Error('No two sum solution');
};