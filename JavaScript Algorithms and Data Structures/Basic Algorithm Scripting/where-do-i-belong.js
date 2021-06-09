function getIndexToIns(arr, num) {
  let sortedArr = arr.sort(function(a, b){return a - b});
  let lowestIndex = 0
  for (let i=0; i < sortedArr.length; i++) {
    if (num > sortedArr[i]) {
    lowestIndex = i + 1
    }
  }
  return lowestIndex
}

getIndexToIns([10, 20, 30, 40, 50], 35);