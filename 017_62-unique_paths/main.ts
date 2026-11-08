function uniquePaths(
  m: number,
  n: number,
  row: number = 0,
  column: number = 0,
  prevResults: number[][] = [],
): number {
  let result: number = 0;

  if (prevResults[row] === undefined) {
    prevResults[row] = [];
  }

  if (prevResults[row][column] !== undefined) {
    return prevResults[row][column];
  }

  if (row === m - 1 && column === n - 1) {
    result = 1;
  } else if (row === m - 1) {
    result = uniquePaths(m, n, row, column + 1, prevResults);
  } else if (column === n - 1) {
    result = uniquePaths(m, n, row + 1, column, prevResults);
  } else {
    result =
      uniquePaths(m, n, row, column + 1, prevResults) +
      uniquePaths(m, n, row + 1, column, prevResults);
  }

  prevResults[row][column] = result;
  return result;
}
