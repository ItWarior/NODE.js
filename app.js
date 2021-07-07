let fs = require('fs');
let writeStream = fs.createWriteStream('./big.txt');
for (let i = 0; i < 1e6; i++) {
   writeStream.write('hello gays')
}
let readStream = fs.createReadStream('./big.txt');
readStream.on('data', function (res) {
   console.log(res.toString());
})
