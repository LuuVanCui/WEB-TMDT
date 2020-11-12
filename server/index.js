const express = require('express'); // Sử dụng framework express
const next = require('next'); // Include module next

const port = parseInt(process.env.PORT, 10) || 3000 // Port để chạy app Nextjs, cũng là server nodejs
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const bodyParser = require('body-parser');
const router = require('./route');
const db = require('./config/db');

app.prepare().then(() => {
  const server = express();

  // bodyParser
  server.use(bodyParser.json());

  // Connect to database
  db.connect();

  // Nếu các bạn muốn các routing tự động liến kết đến route files giống với cấu trúc của Nextjs thì chỉ cần thêm 3 dòng bên dưới
  // https://nextjs.org/docs/routing/introduction

  // Call router
  server.use('/api', router);

  // Call all route in nextjs - run all file in pages folder
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});