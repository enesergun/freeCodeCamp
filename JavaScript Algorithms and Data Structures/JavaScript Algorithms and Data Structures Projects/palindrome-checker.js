function palindrome(str) {
  str = str.replace(/[^a-z0-9+]+/gi, '+');
  let softStr = str.split("+").join("").toLowerCase();
  let reversedStr = softStr.split("").reverse().join("");

  if (softStr === reversedStr) {
    return true
  } else {
    return false
  }
}



palindrome("A man, a plan, a canal. Panama");