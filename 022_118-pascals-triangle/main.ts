function generate(numRows: number): number[][] {
  let result: number[][] = [];

  for (let i: number = 0; i < numRows; i++) {
    let row: number[] = [];
    row.push(1);
    if (i > 0) {
      for (let j: number = 1; j < result[i - 1].length; j++) {
        let sum: number = result[i - 1][j - 1] + result[i - 1][j];
        row.push(sum);
      }
      row.push(1);
    }

    result.push(row);
  }

  return result;
}
