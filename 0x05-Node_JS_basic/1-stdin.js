process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.trim();
  if (name) {
    console.log(`Your name is: ${name}`);
  } else {
    console.log('Your name is: NULL');
  }

  process.stdin.on('close', () => {
    console.log('This important software is now closing\n');
  });
});
