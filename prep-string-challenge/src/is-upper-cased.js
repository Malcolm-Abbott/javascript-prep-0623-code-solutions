/* exported isUpperCased */
function isUpperCased(string1) {
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string1[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
