function isare(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "+" || str[i] == "-" || str[i] == "*") {
      count++;
    }
  }
  return count;
}
let isareSayi = isare("+5-2+4-m/n*2:4");
console.log(isareSayi);
