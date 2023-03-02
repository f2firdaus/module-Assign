const http = require('http');

const server = http.createServer((req, res) => {
  console.log("server starte")
  res.end("hello world")
})
// server.listen(8080);