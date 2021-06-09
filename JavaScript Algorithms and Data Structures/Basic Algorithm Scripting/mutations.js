function mutation(arr) {
  let first = arr[1].toLowerCase();
  let second = arr[0].toLowerCase();
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) < 0) {
      return false
    }
  }
  return true;
}

mutation(["hello", "hey"]);