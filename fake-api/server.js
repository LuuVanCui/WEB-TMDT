const express = require('express');
const data = require('./data');

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {
    console.log('Fake server listen on port 5000');
});
