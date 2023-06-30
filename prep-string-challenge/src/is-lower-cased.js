/* exported isLowerCased */
function isLowerCased(string1) {
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string1[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
