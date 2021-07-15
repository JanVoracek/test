const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello Banana 23');
    res.end();
}).listen(parseInt(process.env.PORT, 10));
