const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<h1>Hello Node</h1>`);
  })
  .listen(5000);
