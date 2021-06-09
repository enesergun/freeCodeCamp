function repeatStringNumTimes(str, num) {
  let repeat = "";
  if (num === 0  || num < 0) {
    return repeat
  } else {
    for (let i=0; i < num; i++) {
      repeat += str;
    }
  }
  return repeat
}

console.log(repeatStringNumTimes("abc", 3));