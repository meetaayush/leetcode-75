// nth-tribonacci number

var tribonacci = function(n) {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1

    let dp0 = 0;
    let dp1 = 1;
    let dp2 = 1;
    for (let i = 3; i <= n; i++) {
        let sum = dp0 + dp1 + dp2;
        dp0 = dp1;
        dp1 = dp2
        dp2 = sum;
    }

    return dp2;
};