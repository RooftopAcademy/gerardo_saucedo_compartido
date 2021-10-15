const express = require('express');
const path = require('path');
const app = express();
const api = express();

const port = 3000;
const portApi = 3001;

app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.get('/products', (request, response) => {
  console.log(path.resolve(__dirname, 'dist'));
  response.sendFile(`${__dirname}/products.html`);
});

app.get('/cart', (request, response) => {
  response.sendFile(`${__dirname}/cart.html`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//API
const db = require('./db.json');
api.get('/products', (request, response) => {
  response.json(db);
});
api.get('/products/:id', (request, response) => {
  response.json(db.products.find((item) => item.id == request.params.id));
});

api.listen(portApi, () => {
  console.log('Api listening on port ' + portApi);
});
