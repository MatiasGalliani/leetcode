function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  let i: number = 0;
  let j: number = nums.length - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  i = 0;
  j = k - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  i = k;
  j = nums.length - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}

let nums: number[] = [1, 2, 3, 4, 5, 6, 7];

let k: number = 3;

rotate(nums, k);

console.log(nums);
