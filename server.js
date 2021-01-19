const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;
const router = require('./api/route');
const db = require('./api/config/db');
const dotenv = require('dotenv');

dotenv.config();

// connect to db
db.connect();

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
