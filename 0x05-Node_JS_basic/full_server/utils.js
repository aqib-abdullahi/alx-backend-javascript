const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot read the database'));
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

        resolve(fields);
      }
    });
  });
}

module.exports = { readDatabase };
