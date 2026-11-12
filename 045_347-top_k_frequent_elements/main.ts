function topKFrequent(nums: number[], k: number): number[] {
  let frequency = new Map<number, number>();
  let result: number[] = [];

  for (const num of nums) {
    if (!frequency.has(num)) {
      frequency.set(num, 0);
    } else {
      let getValue: number = frequency.get(num);
      frequency.set(num, getValue + 1);
    }
  }

  const sortedDesc = [...frequency.entries()].sort((a, b) => b[1] - a[1]);

  console.log(`sortedDesc is like this => ${sortedDesc}`);

  for (let i: number = 0; i < k; i++) {
    let toPush: number = sortedDesc[i][0];
    result.push(toPush);
  }

  return result;
}

let nums: number[] = [1, 1, 1, 2, 2, 3];
let k: number = 2;

console.log(topKFrequent(nums, k));
