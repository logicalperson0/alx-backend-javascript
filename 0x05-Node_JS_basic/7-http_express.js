/* eslint-env node */
const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let display = 'This is the list of our students\n';

  await students(process.argv[2])
    .then((mess) => {
      display += mess;
      res.end(display);
    })
    .catch((error) => {
      display += error.message;
      res.end(display);
    });
});

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
