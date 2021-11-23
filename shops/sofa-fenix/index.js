const http = require("http");

http
  .createServer(function (req, res) {
    res.write(`Fenix 4`);
    res.end();
  })
  .listen(parseInt(process.env.PORT, 10));
