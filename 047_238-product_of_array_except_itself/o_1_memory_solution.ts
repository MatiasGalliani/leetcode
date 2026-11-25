function productExceptSelf(nums: number[]): number[] {
  let answer: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    if (i === 0) {
      answer[i] = 1;
      continue;
    }

    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let postfix = 1;

  for (let i: number = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfix *= nums[i];
      continue;
    } else {
      console.log(`The postfix now is ${postfix}`);

      answer[i] = answer[i] * postfix;

      postfix *= nums[i];
    }
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));

/*
example 1:

input: nums = [1, 2, 3, 4] => 24
output: [24, 12, 8, 6]

example 2:
input: nums = [-1, 1, 0, -3, 3] => 0
output: [0, 0, 9, 0, 0]
*/
