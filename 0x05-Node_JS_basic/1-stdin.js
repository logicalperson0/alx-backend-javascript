const { spawn } = require('child_process');

const welcomemess = 'Welcome to Holberton School, what is your name?\n'
const closemess = 'This important software is now closing'

const kidprocess = spawn('node', ['1-stdin.js']);

kidprocess.stdout.on('data', (data) => {
  console.log(data.toString());
});

kidprocess.stdin.write(welcomemess);

kidprocess.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}\n`);
});

kidprocess.on('close', (code) => {
    console.log(closemess)
});
