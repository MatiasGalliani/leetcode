function longestConsecutive(nums: number[]): number {
  let longest: number = 0;
  let numSet = new Set<number>(nums);

  for (const num of numSet.values()) {
    if (!numSet.has(num - 1)) {
      let length: number = 0;
      while (numSet.has(num + length)) {
        length++;
      }

      if (length > longest) {
        longest = length;
      }
    }
  }

  return longest;
}

/*
given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

O(n) => Create an algorithm of hashing

what does consecutive means?
1, 2, 3, 4, 5 => are consecutive

So basically, when we find the next integer number.
*/
