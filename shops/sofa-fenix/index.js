const http = require("http");

http
  .createServer(function (req, res) {
    res.write(`Fenix 7`);
    res.end();
  })
  .listen(parseInt(process.env.PORT, 10));
