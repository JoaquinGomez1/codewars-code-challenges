function tribonacci(signature, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i < 3) result.push(signature[i]);
    else {
      const sumOfThree = result[i - 3] + result[i - 2] + result[i - 1];
      result.push(sumOfThree);
    }
  }

  return result;
}
