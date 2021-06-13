function myReplace(str, before, after) {
  let newAfter = ""
  let charCode = before[0].charCodeAt(0)
  if(charCode >= "A".charCodeAt(0) && 
  charCode <= "Z".charCodeAt(0)) {
    newAfter = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    newAfter = after.toLowerCase();
  }
  return str.replace(before, newAfter)
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");