function cumle(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "." || str[i] == "!") {
      if (str[i + 1] == ".") {
        continue;
      }
      count++;
    }
  }
  return count;
}
let cumleSayi = cumle("Hello world! I learn to code.");
console.log(cumleSayi);
