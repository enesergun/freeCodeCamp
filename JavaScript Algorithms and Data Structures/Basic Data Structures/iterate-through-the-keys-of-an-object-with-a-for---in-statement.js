function countOnline(usersObj) {
  // Only change code below this line
  let counter = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      counter++;
    }
  }
  return counter;
  // Only change code above this line
}