// 11-盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 */
// 时间26.56%  空间20.41% O(n^2)  不好
// var maxArea = function (height) {
//     let maxContainer = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             const _height = Math.min(height[i], height[j]);
//             if (_height * (j - i) > maxContainer) {
//                 maxContainer = _height * (j - i);
//             }
//         }
//     }

//     return maxContainer;

// };

// 这题利用双指针去做，i 指向最左边，j 指向最右边。当发现左边比较高的时候，保持左边
// 不动，右边左移。当发现右边比较高的时候，保持右边不动，左边右移。在这个过程中不断
// 更新最大值，最后 i === j 的时候，即可求得最大值。
// 71.34%  24.92%
var maxArea = function (height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;

    while (i !== j) {
        let xLen = j - i;
        let leftHeight = height[i];
        let rightHeight = height[j];
        let area;
        if (leftHeight > rightHeight) {
            // 左边大于右边，左边不动，右边移动
            area = xLen * rightHeight;
            j--;
        } else {
            // 左边小于右边，右边不动，左边移动
            area = xLen * leftHeight;
            i++;
        }
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;

};