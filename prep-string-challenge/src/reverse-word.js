/* exported reverseWord */
function reverseWord(string1) {
  let string2 = '';
  for (let i = string1.length - 1; i >= 0; i--) {
    string2 += string1[i];
  }
  return string2;
}
