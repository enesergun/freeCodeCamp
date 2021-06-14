function dropElements(arr, func) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.map(func)[i]) {
      newArr = arr.slice(i);
      break
    }
  }
  return newArr
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});