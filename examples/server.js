// Build an HTTP Server

// HTTP module used to creat HTTP server
const http = require("http");

// Which port the server should run
const port = 3000;

// Callback function executed with every request
// req = request details from user
// res = response details send back to user
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
