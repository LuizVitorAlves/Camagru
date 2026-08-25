const http = require('node:http');

const port = Number(process.env.PORT || 8080);

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Camagru is running.');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Camagru listening on port ${port}`);
});
