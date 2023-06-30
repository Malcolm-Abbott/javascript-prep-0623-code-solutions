/* exported getLastChar */
function getLastChar(string1) {
  const length = string1.length;
  for (let i = 0; i < length; i++) {
    console.log(string1[i]);
  }
  return string1[string1.length - 1];
}
