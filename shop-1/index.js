const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello Banana 21');
    res.end();
}).listen(parseInt(process.env.PORT, 10));
