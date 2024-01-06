/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  /*
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // The length of the string must be same
    let len1 = str1.length;
    let len2 = str2.length;

    if (len1 != len2) {
      return false;
    }

    let freq = new Array(26).fill(0);

    for (let i = 0; i < len1; i++) {
      freq[str1.charCodeAt(i) - "a".charCodeAt(0)]++;
      freq[str2.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    // Now traverse the frequency array
    for (let i = 0; i < 26; i++) {
      if (freq[i] !== 0) {
        return false;
      }
    }

    return true;

  */

  let newStr1 = str1.toLowerCase().split("").sort().join("");
  let newStr2 = str2.toLowerCase().split("").sort().join("");

  return newStr1 === newStr2;
}

module.exports = isAnagram;
