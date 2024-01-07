/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.toLowerCase();
  let len = s.length;
  let i = 0;
  let j = len - 1;

  while (i < j) {
    if (s.charAt(i) == " " || !/[a-zA-Z]$/.test(s.charAt(i))) {
      i++;
    } else if (s.charAt(j) == " " || !/[a-zA-Z]$/.test(s.charAt(j))) {
      j--;
    } else if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
