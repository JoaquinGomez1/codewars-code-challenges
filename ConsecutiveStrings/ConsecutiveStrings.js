function longestConsec(strarr, k) {
  let longestArr = undefined;
  if (k < 1) return "";
  if (k > strarr.length) return "";

  for (let i = 0; i < strarr.length; i++) {
    if (i + k > strarr.length) break;
    let maximumConsecutiveStrings = "";

    for (let j = i; j < k + i; j++) {
      maximumConsecutiveStrings += strarr[j];
    }
    if (!longestArr) longestArr = maximumConsecutiveStrings;
    else if (longestArr.length < maximumConsecutiveStrings.length) {
      longestArr = maximumConsecutiveStrings;
    }
  }

  return longestArr;
}
