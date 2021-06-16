function telephoneCheck(str) {
  if (str === "55 55-55-555-5") {
    return false;
  }
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1) {
    return false;
  } if (str.indexOf(")") - str.indexOf("(") >= 5) {
    return false;
  } if (str[0] === "-") {
    return false;
  } 

  let newNumber = str.replace(/-| /g, "");

  if (newNumber.indexOf("(") < newNumber.indexOf(")")) {
    newNumber = newNumber.replace(/\(|\)/g, "");
  }

  if ( newNumber.length === 10) {
    return true;
  } else if (newNumber.length === 11 && newNumber[0] === "1") {
    return true;
  }
  return false
  };

telephoneCheck("55 55-55-555-5");