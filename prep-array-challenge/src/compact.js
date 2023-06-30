/* exported compact */
function compact(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = 0; i < length; i++) {
    if (array1[i]) {
      array2[array2.length] = array1[i];
    }
  }
  return array2;
}
