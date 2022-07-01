function isare(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "+" || str[i] == "-" || str[i] == "*") {
      count++;
    }
  }
  return count;
}
let isareSayi = isare("-1+2*3+a");
console.log(isareSayi);
