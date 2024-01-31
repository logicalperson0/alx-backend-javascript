/* eslint-env node */
const fs = require('fs');

const countStudents = (patharg) => {
  try {
    const data = fs.readFileSync(patharg, { encoding: 'utf-8' }).split('\n');
    // console.log(data);
    let x = 0;
    const fields = {};
    let countStu = 0;

    for (x in data) { // eslint-disable-line
      // no empty lines plus the 1st line should not print
      if (data[x] !== '' && x > 0) {
        const van = data[x].split(',');
        // grouping the fields and firstNames to variables
        const field = van[3];
        const fn = van[0];
        countStu += 1;

        // to check if a specific field exists, if not then new field
        if (!fields[field]) {
          fields[field] = {
            cou: 1,
            stu: [fn],
          };
          // if field exists then add to it the first name and count
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

    // accessing fields object keys, and assigning cou to num
    // and joining the first names with , to stufn
    for (const fi of Object.keys(fields)) {
      const num = fields[fi].cou;
      const stuFn = fields[fi].stu.join(', ');

      console.log(`Number of students in ${fi}: ${num}. List: ${stuFn}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
