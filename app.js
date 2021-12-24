require('dotenv').config();
const http = require('http');

const router = require('./router');

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

process.on('uncaughtException', err => {
  process.exit(1)
})

const server = http.createServer((req, res) => {
  router(req, res);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});