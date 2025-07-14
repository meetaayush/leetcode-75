var minCostClimbingStairs = function(cost) {
    const n = cost.length
    let prev2 = cost[0]
    let prev = cost[1]
    for (let i = 2; i < n; i++) {
        const temp = cost[i] + Math.min(prev, prev2)
        prev2 = prev
        prev = temp
    }
    return Math.min(
        prev, 
        prev2
    )
};