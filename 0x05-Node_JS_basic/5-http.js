const http = require('http');
const fs = require('fs');

function countStudents(path, stream) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
        }

        const students = lines.slice(1).map((line) => line.split(','));
        const fields = {};

        for (const student of students) {
          const field = student[3];

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(student[0]);
        }

        stream.write(`\nNumber of students: ${students.length}`);

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const count = fields[field].length;
            const list = fields[field].join(', ');
            stream.write(`\nNumber of students in ${field}: ${count}. List: ${list}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
const port = 1245;
const hostname = '127.0.0.1';
const app = http.createServer((req, res) => {
  const { url } = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    const db = process.argv[2];
    res.write('This is the list of our students');
    countStudents(db, res)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
