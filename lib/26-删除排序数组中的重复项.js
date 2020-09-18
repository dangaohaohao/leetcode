// 26-删除排序数组中的重复项 O(1) 额外空间
/**
 * @param {number[]} nums
 * @return {number}
 */
// i j 双指针, i 来分割新数组
// 如果 i === j, j ++
// 如果 i !== j, i ++, i = j
// 88.93% 25.39%
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};