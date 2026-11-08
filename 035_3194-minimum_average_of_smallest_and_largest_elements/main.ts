function minimumAverage(nums: number[]): number {
  let averages: number[] = [];
  nums.sort((a, b) => a - b);

  let j: number = 0;
  let k: number = nums.length - 1;

  while (j < k) {
    let minElement: number = nums[j];
    let maxElement: number = nums[k];

    let toPush: number = (minElement + maxElement) / 2;

    averages.push(toPush);

    j++;
    k--;
  }

  return Math.min(...averages);
}

/*
have an array of floating numbers averages, which is initially empty

given an array nums of n integers where n is even

repeat the following procedure n / 2 times

remove the smallest element, minElement, and the largest element, maxElement, from nums

add (minElement + maxElement) / 2 t to averages

return the minimum element in averages
*/
