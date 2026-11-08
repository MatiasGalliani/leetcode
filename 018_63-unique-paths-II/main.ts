function uniquePathsWithObstacles(
  obstacleGrid: number[][],
  m: number = obstacleGrid.length,
  n: number = obstacleGrid[0].length,
  row: number = 0,
  column: number = 0,
  prevResults: number[][] = [],
): number {
  let result: number = 0;

  // in case prevResults[row] is not defined yet
  if (prevResults[row] === undefined) {
    prevResults[row] = [];
  }

  // memoization case
  if (prevResults[row][column] !== undefined) {
    return prevResults[row][column];
  }

  // recursive case
  if (obstacleGrid[row][column] === 1) {
    result = 0;
  } else if (row === m - 1 && column === n - 1) {
    result = 1;
  } else if (row === m - 1) {
    result = uniquePathsWithObstacles(
      obstacleGrid,
      m,
      n,
      row,
      column + 1,
      prevResults,
    );
  } else if (column === n - 1) {
    result = uniquePathsWithObstacles(
      obstacleGrid,
      m,
      n,
      row + 1,
      column,
      prevResults,
    );
  } else {
    result =
      uniquePathsWithObstacles(
        obstacleGrid,
        m,
        n,
        row + 1,
        column,
        prevResults,
      ) +
      uniquePathsWithObstacles(
        obstacleGrid,
        m,
        n,
        row,
        column + 1,
        prevResults,
      );
  }

  // store the result in the array for memoization
  prevResults[row][column] = result;

  // return result
  return result;
}
