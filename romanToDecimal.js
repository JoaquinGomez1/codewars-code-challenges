// Create a function that converts roman numbers into decimal.

function solution(roman) {
  const numbersDic = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000 };
  const arr = roman.toLowerCase().split("");

  let lastNumber = undefined;
  const totalNumber = arr.reduce((total, romanNumber) => {
    const thisNumber = numbersDic[romanNumber];

    if (lastNumber && lastNumber < thisNumber)
      return total - lastNumber + (thisNumber - lastNumber);
    lastNumber = thisNumber;
    return total + thisNumber;
  }, 0);
  return totalNumber;
}

console.log(solution("X"));
console.log(solution("IX"));
console.log(solution("IV"));
console.log(solution("MMmCDLVIII"));
