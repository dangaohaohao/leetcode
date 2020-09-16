// 回文子串：正着读和反着读是一样的
// 解题思路：
// 1: 暴力求解，列举所有的子串，判断是否为回文串，保存最长的回文串。超出时间限制, 不能 AC O(n^2)
/**
 * @param {string} s
 * @return {string}
 */
// 一个判断字符是否为回文的方法
// 遍历，判断每个字符串
// var longestPalindrome = function (s) {
//     let res = '';
//     let max = 0;
//     const isParlindrome = (str) => {
//         if (!str || !str.length) return false;
//         let left = 0;
//         let right = str.length - 1;
//         while (left <= right) {
//             if (str.charAt(left++) !== str.charAt(right--)) return false;
//         }
//         return true;
//     }

//     for (let i = 0; i < s.length; i++) {
//         for (let j = 1; j <= s.length; j++) {
//             let tmpStr = s.substring(i, j);
//             if (isParlindrome(tmpStr)) {
//                 if (tmpStr.length > max) {
//                     res = tmpStr;
//                     max = Math.max(tmpStr.length, max);
//                 }
//             }
//         }
//     }

//     return res;
// };


/**
 * @param {string} s
 * @return {string}
 */
// 动态规划 用空间换时间 时间42.13%  空间9.50%
var longestPalindrome = function (s) {

    if (!s || s.length < 2) return s;

    let strLen = s.length; // 传入字符串长度
    let maxLen = 0; // 记录长度
    let begin = 0; // 记录起始位置

    // 创建一个数组用来保存，如: tempArr[i][j] = true 意思为 s 的i...j 为回文
    let tempArr = new Array(strLen);
    for (let i = 0; i < strLen; i++) {
        tempArr[i] = new Array(strLen);
    }

    // 把自身设置为回文
    for (let i = 0; i < strLen; i++) {
        tempArr[i][i] = true;
    }

    for (let j = 0; j < strLen; j++) {
        for (let i = 0; i <= j; i++) {
            if (s.charAt(i) !== s.charAt(j)) {
                tempArr[i][j] = false;
            } else {
                // 动态规划，把大问题划为小问题 j-1- (i + 1) + 1< 2 为 j - 1 - i - 1 + 1 < 2 一样的判断条件，但总有个出口条件啊
                if (j - i < 3) {
                    tempArr[i][j] = true;
                } else {
                    tempArr[i][j] = tempArr[i + 1][j - 1];
                }
            }
            // tempArr[i][j] 为 true 表示 s[i...j]为回文, 记录长度以及起始位置
            if (tempArr[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }

    return s.substring(begin, begin + maxLen);

};