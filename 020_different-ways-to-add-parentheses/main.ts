function diffWaysToCompute(
  expression: string,
  mapa: Map<string, number[]> = new Map(),
): number[] {
  const operators = ["+", "-", "*"];

  if (mapa.get(expression)) {
    return mapa.get(expression);
  }

  const hasOperator = operators.some((operator) =>
    expression.includes(operator),
  );

  if (!hasOperator) {
    let result: number = +expression;
    return [result];
  }

  const results: number[] = [];

  for (let i: number = 0; i < expression.length; i++) {
    if (operators.includes(expression[i])) {
      const left = expression.slice(0, i);
      const right = expression.slice(i + 1);
      const operator = expression[i];

      const resultsRight = diffWaysToCompute(right, mapa);
      const resultsLeft = diffWaysToCompute(left, mapa);

      for (let a = 0; a < resultsLeft.length; a++) {
        for (let b = 0; b < resultsRight.length; b++) {
          if (operator === "+") {
            results.push(resultsLeft[a] + resultsRight[b]);
          } else if (operator === "-") {
            results.push(resultsLeft[a] - resultsRight[b]);
          } else if (operator === "*") {
            results.push(resultsLeft[a] * resultsRight[b]);
          }
        }
      }
    }
  }

  mapa.set(expression, results);

  return results;
}
