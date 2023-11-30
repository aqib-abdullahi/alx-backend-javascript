const { readDatabase  } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const db = './database.csv';
    try {
      const data = await readDatabase(db);
      let response = 'This is the list of our students';
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      fields.forEach((field) => {
          const students = data[field].join(', ');
          response += `\nNumber of students in ${field}: ${data[field].length}. List: ${students}`;
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
  
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const allowedMajors = ['CS', 'SWE'];

    if (!allowedMajors.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const db = './database.csv';
      const data = await readDatabase(db);
      const studentsByMajor = data[major] || [];
      res.status(200).send(`List: ${studentsByMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
