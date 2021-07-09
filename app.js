let http = require('http');   //підключаємо модуль
let fs = require('fs');      

let server = http.createServer();
server.on('request', function (request, response) {//навішуємо на сервер подію, тобто
   response.writeHead(200, {
      'Content-Type':'text/html'
   })
   fs.readFile('./index.html', function (error, data) {
      response.write(data.toString());
      response.end();    //коли буде запит reques викликаємо collback
   })
})                                            //який повертає response
server.listen(3000, function () {        //вказуємо який порт буде слухати сервер
   console.log("listen...");             //завжди вказуємо 3000 порт
})