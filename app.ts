const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

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
