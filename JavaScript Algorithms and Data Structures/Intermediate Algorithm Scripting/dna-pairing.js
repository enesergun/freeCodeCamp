function pairElement(str) {
  let dna = []
  let arr = []
  for (let i=0; i < str.length; i++) {
    if (str[i] === "G") {
      arr = ["G", "C"];
      dna.push(arr);
    } else if (str[i] === "C") {
      arr = ["C", "G"];
      dna.push(arr);
    } else if (str[i] === "A") {
      arr = ["A", "T"];
      dna.push(arr);
    } else if (str[i] === "T") {
      arr = ["T", "A"];
      dna.push(arr);
    }
  }
  return dna
}

pairElement("GCG");