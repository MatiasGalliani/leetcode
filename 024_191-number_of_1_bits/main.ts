function hammingWeight(n: number): number {
    if (n === 0) return 0

    let totalBits: number = 0

    while (n !== 0) {
        if (n % 2 !== 0) {
            totalBits += 1    
        }
        n = Math.floor(n / 2)
    }

    return totalBits
};
