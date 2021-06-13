function uniteUnique(...arr) {
  let arrays = [];
  for (let i=0; i < arr.length; i++) {
    arrays = arrays.concat(arr[i]);
  }
  let uniqueArr = [...new Set(arrays)];
  return uniqueArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);