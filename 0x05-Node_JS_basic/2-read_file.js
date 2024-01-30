/* eslint-env node */
const fs = require('fs');

function countStudents(patharg) {
  try {
    const data = fs.readFileSync(patharg, { encoding: 'utf-8' }).split('\n');
    // console.log(data);
    let x = 0;
    const fields = {};
    let countStu = 0;

    for (x in data) {
      if (data[x] !== '' && x > 0) {
        const van = data[x].split(',');
        const field = van[3];
        const fn = van[0];
        countStu += 1;

        if (!fields[field]) {
          fields[field] = {
            cou: 1,
            stu: [fn],
          };
        } else {
          const newcou = fields[field].cou + 1;
          const newstu = (fields[field].stu).concat(fn);

          fields[field] = {
            cou: newcou,
            stu: newstu,
          };
        }
      }
      x += 1;
    }
    console.log(`Number of students: ${countStu}`);

    for (const fi of Object.keys(fields)) {
      const num = fields[fi].cou;
      const stuFn = fields[fi].stu.join(', ');

      console.log(`Number of students in ${fi}: ${num}. List: ${stuFn}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
