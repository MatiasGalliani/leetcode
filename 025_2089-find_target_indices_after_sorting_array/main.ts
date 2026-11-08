function targetIndices(nums: number[], target: number): number[] {
    const sortedNums: number[] = [...nums].sort((a, b) => a - b);

    let result: number[] = []

    for (let i: number = 0; i < sortedNums.length; i++) {
      if (sortedNums[i] === target) {
        result.push(i)
      }
    }

    return result
};

const nums = [3, 5, 12, 2, 78, 2]
const target = 2

console.log(targetIndices(nums, target))

//given 0 indexed int array && target element

// target index is an index i such that nums[i] == target

// return a list of the target indices of nums after sorting nums in non decreasing order. if there are no target indices, return an empty list. the returned list must be in increasing order.
