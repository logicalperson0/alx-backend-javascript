const fs = require('fs');

function countStudents(path) {

  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.split('\n');
    const studentCount = students.filter((student) => student.length > 0).length;
    const fieldCounts = {};
    for (const student of students) {
      const [firstName, field] = student.split(',');
      if (field) {
        fieldCounts[field] = fieldCounts[field] || 0;
        fieldCounts[field]++;
      }
    }
    console.log(`Number of students: ${studentCount}`);
    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const firstNames = students.filter((student) => {
        const [firstName] = student.split(',');
        return firstName && fieldCounts[student.split(',')[1]] === count;
      }).map((student) => student.split(',')[0]);
      console.log(`Number of students in ${field}: ${count}. List: ${firstNames}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}
module.exports = countStudents;
