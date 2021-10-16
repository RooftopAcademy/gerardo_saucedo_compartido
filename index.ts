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
  // Website you wish to allow to connect
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  response.json(db.productList);
});
api.get('/products/:id', (request, response) => {
  response.json(db.products.find((item) => item.id == request.params.id));
});

api.listen(portApi, () => {
  console.log('Api listening on port ' + portApi);
});
