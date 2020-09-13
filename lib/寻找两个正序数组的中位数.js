// 给定两个大小为 m 和 n 的正序（ 从小到大） 数组 nums1 和 nums2。
// 请你找出这两个正序数组的中位数， 并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 时间31.93%  空间41.06% 时间复杂度没达到要求, 纯属暴力解法

// var findMedianSortedArrays = function (nums1, nums2) {
//     let result = nums1[0];
//     let tmpList = [...nums1, ...nums2];
//     tmpList.sort((a, b) => a - b);
//     if (tmpList.length % 2 === 0) {
//         // 偶数
//         result = (tmpList[tmpList.length / 2] + tmpList[(tmpList.length / 2) - 1]) / 2;
//     } else {
//         // 奇数
//         result = tmpList[Math.floor(tmpList.length / 2)];
//     }
//     return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 第 k 小数法，使用下标
// 时间 69.58%  空间 82.14%

var findMedianSortedArrays = function (nums1, nums2) {
    const allLen = nums1.length + nums2.length;
    const midCount = Math.floor(allLen / 2);
    let index1 = 0;
    let index2 = 0;
    let tmp = 0;
    let res = 0;

    while (index1 + index2 < allLen) {
        // Infinity解决空数组或者指针超出数组长度的情况
        const num1 = nums1[index1] === undefined ? Infinity : nums1[index1];
        const num2 = nums2[index2] === undefined ? Infinity : nums2[index2];

        if (index1 + index2 === midCount) {
            // 默认为奇数
            res = Math.min(num1, num2);
            // 偶数
            if (allLen % 2 === 0) res = (tmp + res) / 2;
            break;
        }

        // tmp 缓存数据，以供偶数个数时使用
        if (num1 > num2) {
            tmp = num2;
            index2++
        } else if (num1 < num2) {
            tmp = num1;
            index1++
        } else {
            tmp = num1;
            index1++;
            // 两个数字相等的情况，如果已经到达了中位数个数，直接跳到下轮循环开始
            if (index1 + index2 === midCount) continue
            index2++;
        }
    }

    return res;
};

console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));