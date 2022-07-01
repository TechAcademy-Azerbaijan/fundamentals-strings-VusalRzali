const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let n = parseInt(result.input)
    let iki = 0,
      bes = 0;
    while (n > 0) {
      rem = n % 10;
      n = parseInt(n / 10)
      if (rem == 2) {
        iki++
      } else if (rem == 5) {
        bes++
      }
    }
    if (iki > bes) {
      console.log(bes);
    } else if (bes > iki) {
      console.log(iki);
    } else {
     console.log("=")
    }
  
})
