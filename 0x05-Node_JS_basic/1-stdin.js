/* eslint-env node */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function() {
  const naming = process.stdin.read();
  if (naming !== null) {
    process.stdout.write(`Your name is: ${naming}`);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
});
