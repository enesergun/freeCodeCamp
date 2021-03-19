function rangeOfNumbers(startNum, endNum) {
  if (endNum == startNum) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
