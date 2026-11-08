function tribonacci(n: number, memo: Map<number, number> = new Map()): number {
  function memoFunc(n: number) {
    let result: number = 0;
    if (memo.has(n)) {
      return memo.get(n)!;
    }

    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    result = memoFunc(n - 1) + memoFunc(n - 2) + memoFunc(n - 3);
    memo.set(n, result);

    return result;
  }

  return memoFunc(n);
}
