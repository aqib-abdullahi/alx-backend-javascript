const fs = require('fs');

function countStudents(path) {
  try {
    const datum = fs.readFileSync(path, 'utf8');
    const data = datum.split('\n').filter((line) => line.trim() !== '');
    if (data.length === 0) {
      throw new Error('Cannot load the database');
    }
    const students = data.slice(1).map((line) => line.split(','));
    const fields = {};
    for (const student of students) {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    }
    console.log(`Number of students: ${students.length - 1}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
