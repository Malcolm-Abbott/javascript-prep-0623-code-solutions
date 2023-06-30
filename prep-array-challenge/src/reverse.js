/* exported reverse */
function reverse(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = length - 1; i >= 0; i--) {
    array2[array2.length] = array1[i];
  }
  return array2;
}
