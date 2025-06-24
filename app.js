const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from CI/CD Docker App!");
});

server.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});
