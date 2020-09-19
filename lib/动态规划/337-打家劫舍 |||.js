// 337-打家劫舍 |||
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 解题思路: 爷爷 两个父亲 四个孙子
// 1: 爷爷偷 = 爷爷可以偷 + 四个孙子可以偷
// 2: 爷爷不偷 = 两个父亲 可以偷
// method1 = steal(yeye) + steal(yeye.left.left) + steal(yeye.left.right) + steal(yeye.right.left) + steal(yeye.right.right)
// method2 = steal(yeye.left) + steal(yeye.right)
// 比较 Math.max(method1, method2)
var rob = function (root) {

    if (!root) return 0;

    let money = root.val;

    if (root.left) {
        money += rob(root.left.left) + rob(root.left.right);
    }

    if (root.right) {
        money += rob(root.right.left) + rob(root.right.right);
    }

    return Math.max(money, rob(root.left) + rob(root.right));

};

// 用这个改进版本
// 改进版本 上面时间太长了 2068 ms, 其实在求 爷爷 的时候把儿子和孙子都计算了一遍, 以空间换时间, 可以缓存
// 但是树形结构用数组不太好存, 用 Map 结构, key 为 TreeNode, val 为最大偷钱数
// 思路同上 92ms
var rob = function (root) {

    const stealMap = new Map();

    const steal = (root, stealMap) => {
        if (!root) return 0;
        if (stealMap.has(root)) return stealMap.get(root);

        let money = root.val;

        if (root.left) {
            money += steal(root.left.left, stealMap) + steal(root.left.right, stealMap);
        }

        if (root.right) {
            money += steal(root.right.left, stealMap) + steal(root.right.right, stealMap);
        }

        money = Math.max(money, steal(root.left, stealMap) + steal(root.right, stealMap));

        stealMap.set(root, money);

        return money;
    }

    return steal(root, stealMap);

};

// 解法三：换个思路 两种情况: 不偷0, 偷1, 用数组来保存状态 96ms
// 爷爷不偷, 两个儿子要拿出自己最大的金额, 不管两个儿子偷不偷
// 爷爷偷, 两个儿子不能偷 + 爷爷偷的金额
var rob = function (root) {

    const steal = (root) => {
        if (!root) return new Array(2).fill(0);

        const result = new Array(2).fill(0);
        const stealLeft = steal(root.left);
        const stealRight = steal(root.right);

        // 不偷的状态, 儿子偷的最多钱
        result[0] = Math.max(stealLeft[0], stealLeft[1]) + Math.max(stealRight[0], stealRight[1]);

        // 偷的状态, 儿子不偷 + 自己偷
        result[1] = stealLeft[0] + stealRight[0] + root.val;

        return result;
    }

    let res = steal(root);

    return Math.max(res[0], res[1]);

};








// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 以下是理解错误案例
// 解题思路: 思路错了, 并不是简单的跳一级去找最大值就可以, 不是每次都会打劫一层 [2,1,3,null,4] 预期结果其实是 7, 则是 3 + 4
// 1: 算出每一层的和，存入数组
// 2: 跟打家劫舍一样解法
// var rob = function (root) {

//     // 存放每层值的和
//     let resArr = [];

//     // 求每层和
//     const bfs = (nodeArr) => {
//         if (!nodeArr || nodeArr.length === 0) return;

//         let tmpNodeArr = [];
//         let sum = 0;

//         while (nodeArr.length) {
//             let node = nodeArr.shift();
//             if (node) {
//                 node.left && tmpNodeArr.push(node.left);
//                 node.right && tmpNodeArr.push(node.right);
//                 sum += node.val;
//             }
//         }

//         resArr.push(sum);

//         bfs(tmpNodeArr);

//     }

//     bfs([root]);

//     // 根据打家劫舍I 一样解法
//     let dp = new Array(resArr.length + 1);
//     dp[0] = resArr[0];
//     dp[1] = Math.max(resArr[0], resArr[1]);
//     // dp[2] = Math.max(resArr[0] + resArr[2], resArr[1]);
//     dp[2] = Math.max(dp[0] + resArr[2], dp[1]);

//     for (let i = 3; i <= resArr.length; i++) {
//         dp[i] = Math.max(dp[i - 2] + resArr[i], dp[i - 1]);
//     }

//     return dp[resArr.length - 1];

// };