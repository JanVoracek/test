const http = require("http");
const banana = require("./@banana/banana");

http
  .createServer(function (req, res) {
    res.write(`Hello ${banana} 51`);
    res.end();
  })
  .listen(parseInt(process.env.PORT, 10));
