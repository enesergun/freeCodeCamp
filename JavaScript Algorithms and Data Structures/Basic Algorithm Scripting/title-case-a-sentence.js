function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let result = arr.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");