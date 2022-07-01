const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let n = parseInt(result.input)
    
    let last = n % 10;
    let first;
    while (n > 10) {
      n = parseInt(n / 10);
    }
    first = n;
    if (first > last) {
        console.log(first);
    }
    if (first < last) {
        console.log(last);
    }
    if (first == last) {
        console.log("=");
    }

})
