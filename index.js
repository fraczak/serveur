var http = require("http");

var handler = (req, res) =>
  res.end("Bonjour!!!");

http.createServer(handler).listen(8888);

