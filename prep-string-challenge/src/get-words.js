/* exported getWords */
function getWords(string1) {
  const array1 = string1.split(' ');
  if (string1 === '') {
    return [];
  }
  return array1;
}
