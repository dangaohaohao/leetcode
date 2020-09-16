// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 给定 N，计算 F(N)。

/**
 * @param {number} N
 * @return {number}
 */
// 利用递归 O(2^n)  最慢 有大量重复计算
// var fib = function (N) {

//     const getResult = (num) => {
//         // 出口条件
//         if (num < 2) {
//             return num;
//         }
//         return getResult(num - 1) + getResult(num - 2);
//     }

//     return getResult(N);
// };

// 方法二：记忆化自底向上的方法
// 自底向上通过迭代计算斐波那契数的子问题并存储已计算的值，通过已计算的值进行计算。减少递归带来的重复计算。
// 利用数组缓存
// 37.31% 22.22% O(n) O(n)
var fib = function (N) {

    if (N < 2) return N;

    const getMemory = (N) => {
        const tempArr = new Array(N + 1);
        tempArr[0] = 0;
        tempArr[1] = 1;

        for (let i = 2; i <= N; i++) {
            tempArr[i] = tempArr[i - 1] + tempArr[i - 2];
        }

        return tempArr[N];

    }

    return getMemory(N);

};

// 自底向上 27.37% 45.63%
// var fib = function(N) {

//     if(N <= 1) return N;
//     if(N === 2) return 1;

//     let current = 3;
//     let prev1 = 1;
//     let prev2 = 1;

//     for(let i = 3; i <= N; i ++) {
//         current = prev1 + prev2;
//         prev2 = prev1;
//         prev1 = current;
//     }

//     return current;
// };