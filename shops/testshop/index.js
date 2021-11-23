const http = require("http");

http
  .createServer(function (req, res) {
    res.write(`Hello World 52`);
    res.end();
  })
  .listen(parseInt(process.env.PORT, 10));
