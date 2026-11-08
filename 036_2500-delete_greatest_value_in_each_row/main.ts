function deleteGreatestValue(grid: number[][]): number {
  let totalSum: number = 0;
  let biggest: number = 0;
  let listOfBig: number[] = [];

  while (grid[0].length > 0) {
    for (let i: number = 0; i < grid.length; i++) {
      biggest = Math.max(...grid[i]);
      listOfBig.push(biggest);

      for (let j: number = 0; j < grid[i].length; j++) {
        if (grid[i][j] === biggest) {
          grid[i].splice(j, 1);
          break;
        }
      }
    }

    totalSum += Math.max(...listOfBig);
    listOfBig = [];
  }

  return totalSum;
}

console.log(
  deleteGreatestValue([
    [58, 42, 8, 75, 28],
    [35, 21, 13, 21, 72],
  ]),
);

/* 
given m x n matrix grid of +integers
until grid becomes empty, so when the number of columns becomes 0

*/
