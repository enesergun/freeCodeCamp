function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLengths = 0 
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLengths) {
      maxLengths = words[i].length;
    }
  }
  return maxLengths;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");