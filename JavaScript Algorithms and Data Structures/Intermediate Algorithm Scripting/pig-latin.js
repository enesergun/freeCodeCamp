function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    let vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
  return pigLatin
}

translatePigLatin("glove");