// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 给定 N，计算 F(N)。

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {

    const getResult = (num) => {
        // 出口条件
        if (num < 2) {
            return num;
        }
        return getResult(num - 1) + getResult(num - 2);
    }

    return getResult(N);

};