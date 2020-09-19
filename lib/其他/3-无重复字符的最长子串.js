// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// 使用数组滑动窗口 时间 90.03%  空间 67.94%
var lengthOfLongestSubstring = function (s) {
    let tmpArr = [];
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        let _index = tmpArr.indexOf(s[i])
        if (_index !== -1) {
            tmpArr.splice(0, _index + 1);
        }
        tmpArr.push(s[i]);
        maxLen = Math.max(tmpArr.length, maxLen);
    }
    return maxLen;
};

// 使用 map 记录遍历过的字符，下标代替滑动数组记录s 时间 69.69% 空间 81.59%
// var lengthOfLongestSubstring = function (s) {
//     let map = new Map();
//     let maxLen = 0;
//     for (let i = 0, j = 0; j < s.length; j++) {
//         if (map.has(s[j])) {
//             i = Math.max(map.get(s[j]) + 1, i);
//         }
//         map.set(s[j], j);
//         maxLen = Math.max(maxLen, j - i + 1);
//     }
//     return maxLen;
// };

// console.log(lengthOfLongestSubstring("aabaab!bb"));