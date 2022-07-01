function sozler(soz) {
  let m = soz.split(" ");
  let count = 0;
  for (let i = 0; i < m.length; i++) {
    if (m[i] != "") {
      count++;
    }
  }
  console.log(count);
}
sozler("Hello world!");
