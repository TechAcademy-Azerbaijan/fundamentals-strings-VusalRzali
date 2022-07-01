let str = "This is a cat sitting on a table";
let herf = "t";
const herfSayi = (str, herf) => {
  count = 0;
  let bigLetter = herf.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == herf || str[i] == bigLetter) {
      count++;
    }
  }
  console.log(count);
};
herfSayi(str, herf);
