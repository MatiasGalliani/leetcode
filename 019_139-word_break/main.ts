function wordBreak(
  s: string,
  wordDict: string[],
  start: number = 0,
  prevResults: boolean[] = [],
): boolean {
  // result variable
  let result: boolean = false;

  // memoization
  if (prevResults[start] !== undefined) {
    return prevResults[start];
  }

  // success case
  if (start === s.length) {
    return true;
  }

  // recursive case
  for (let end: number = start + 1; end <= s.length; end++) {
    let word: string = s.slice(start, end);

    // recursive case for when we find one word that is a coincidence
    if (wordDict.includes(word)) {
      result = wordBreak(s, wordDict, end, prevResults);
    }

    // store the true case and break the loop
    if (result) {
      prevResults[start] = true;
      break;
    }
  }

  // store the false starts
  if (!result) {
    prevResults[start] = false;
  }

  return result;
}
