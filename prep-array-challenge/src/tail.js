/* exported tail */
function tail(array1) {
  const array2 = [];
  const length = array1.length;
  for (let i = 1; i < length; i++) {
    array2[array2.length] = array1[i];
  }
  return array2;
}
