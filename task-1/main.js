const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let n = result.input
    let res = n.split(",")
    let birinci = parseInt(res[0])
    let ikinci = parseInt(res[1])
    let ucuncu = parseInt(res[2])

    
    console.log(Math.min(birinci,ikinci,ucuncu));
})
