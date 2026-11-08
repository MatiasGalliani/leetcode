function arithmeticTriplets(nums: number[], diff: number): number {
  let i: number = 0;
  let j: number = i + 1;
  let k: number = j + 1;
  let result: number = 0;

  while (k < nums.length) {
    let arit1: number = nums[j] - nums[i];
    let arit2: number = nums[k] - nums[j];

    if (arit1 < diff) {
      j++;
    } else if (arit1 > diff) {
      i++;
    } else {
      if (arit2 < diff) {
        k++;
      } else if (arit2 > diff) {
        j++;
      } else {
        result++;
        i++;
      }
    }

    if (i >= j) j = i + 1;
    if (j >= k) k = j + 1;
  }

  return result;
}

/*
given a 0 indexed, strictly increasing int array nums, and a positive int diff. a triplet (i, j, k) is an arithmetic triplet if the following conditions are met.

- i < j < k
- nums[j] - nums[i] = diff
- nums[k] - nums[j] = diff

return the number of unique arithmetic triplets

three pointers
i, j, k

let i: number = 0;
let j: number = i + 1;
let k: number = j + 1;
*/
