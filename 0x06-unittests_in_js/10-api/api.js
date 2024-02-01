/* eslint-env node */
const express = require('express');

const app = express();
const port = 7865;
const host = '127.0.0.1';

app.use(express.json());

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id  = req.params.id;
  res.end(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  let userame = '';
  userame = req.body.userName;

  res.end(`Welcome ${userame}`);
});

app.listen(port, host, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
