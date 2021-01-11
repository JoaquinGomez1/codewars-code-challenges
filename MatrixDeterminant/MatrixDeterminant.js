const m2 = [
  [2, 3, 4, 6],
  [2, 5, 3, 5],
  [1, -2, -1, 8],
  [1, 3, 4, 12],
];
function determinant(m) {
  // return the determinant of the matrix passed in
  let is2x2 = false;
  if (m.length === 1 && m[0].length === 1) return m[0][0];
  if (m.length === 2 && m[0].length === 2) is2x2 = true;

  // Recursively reduce the matrix into a 2x2 to then be able to calculate the determinant of the result
  if (!is2x2) {
    let arrResults = [];
    const firstRow = m[0];

    firstRow.forEach((element, index) => {
      let mMinor = removeRow(removeCol(m, index), 0); // == m - 1 columns and m - 1 row
      arrResults.push(element * determinant(mMinor));
    });
    return arrResults.reduce((acc, el, index) => {
      if (index % 2 === 0) return acc + el;
      else return acc - el;
    });
  } else return det2x2(m);
}

function det2x2(m) {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0];
}

function removeCol(m, i) {
  const copyM = [];
  m.forEach((row, indexRow) => {
    copyM.push([]);
    row.forEach((element, indexElem) => {
      if (indexElem !== i) copyM[indexRow].push(element);
    });
  });

  return copyM;
}

function removeRow(m, i) {
  const mCopy = [...m];
  mCopy.splice(i, 1);
  return mCopy;
}

console.log(determinant(m2));
