function numIdenticalPairs(nums: number[]): number {
    let result: number = 0
    let map = new Map<number, number>();
    nums.forEach(num => map.set(num, 0));

    for (const num of nums) {
        let n: number = map.get(num)
        n +=  1
        map.set(num, n)
    }

    for (const num of map.values()) {
        let timesForEach: number = (num * (num - 1)) / 2
        result += timesForEach
    }

    return result
};

/*
given array of integers nums, return the number of good pairs
a pair is called good if nums[i] is equal to nums[j] and i < j


*/
