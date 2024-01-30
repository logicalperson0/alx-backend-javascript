/* eslint-env node */
const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
