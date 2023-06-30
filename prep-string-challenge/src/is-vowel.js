/* exported isVowel */
function isVowel(string1) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const string2 = string1.toLowerCase();
  if (vowels.includes(string2)) {
    return true;
  }
  return false;
}
