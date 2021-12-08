const http = require("http");

http
  .createServer(function (req, res) {
    res.write(`Hello World 54`);
    res.end();
  })
  .listen(parseInt(process.env.PORT, 10));
