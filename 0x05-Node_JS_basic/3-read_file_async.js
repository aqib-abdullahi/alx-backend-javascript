const fs = require('fs');

function countStudents(path) {
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

        console.log(`Number of students: ${students.length}`);

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const count = fields[field].length;
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
