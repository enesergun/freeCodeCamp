function sentensify(str) {
  // Only change code below this line
  let arr = str.split(/\W/);
  let newStr = arr.join(" ");
  return newStr

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");