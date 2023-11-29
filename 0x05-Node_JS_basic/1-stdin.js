process.stdin.setEncoding('utf-8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('Your name is: NULL');
  }

  process.stdin.on('close', () => {
    process.stdout.write('This important software is now closing\n');
  });
});
