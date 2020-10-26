const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const router = require('./route');
const db = require('./config/db');

// bodyParser
app.use(bodyParser.json());

// Connect db
db.connect();

router(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});