  function digitFrequencyScore(n: number): number {
  let result: number = 0

  const map = new Map<number, number>

  const nums: number[] = String(n)
  .split('')
  .map(Number);

  for (const num of nums) {
    let currentValue: number = map.get(num)

    if (currentValue === undefined) {
      map.set(num, 0)
      currentValue = 0
    }

    map.set(num, currentValue + 1)
  }

  for (const key of map.keys()) {
    value = map.get(key)
    result += (value * key)
  }

  return result
};

console.log(digitFrequencyScore(122))

/*
3945. Digit Frequency Score

You are given an integer n.

The score of n is defined as the sum of d * freq(d) over all distinct digits d, where freq(d) denotes the number of times the digit d appears in n.

Return an integer denoting the score of n.

 

Example 1:

Input: n = 122

Output: 5

Explanation:

The digit 1 appears 1 time, contributing 1 * 1 = 1.
The digit 2 appears 2 times, contributing 2 * 2 = 4.
Thus, the score of n is 1 + 4 = 5.
Example 2:

Input: n = 101

Output: 2

Explanation:

The digit 0 appears 1 time, contributing 0 * 1 = 0.
The digit 1 appears 2 times, contributing 1 * 2 = 2.
Thus, the score of n is 2.
*/
