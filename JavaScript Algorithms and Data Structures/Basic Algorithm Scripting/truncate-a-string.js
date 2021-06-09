function truncateString(str, num) {
  let truncate = str.substring(0,num);
  if (num >= str.length) {
    return truncate;
  } else {
    truncate += '...';
  }
  return truncate
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);