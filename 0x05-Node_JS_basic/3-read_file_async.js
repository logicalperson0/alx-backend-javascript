/* eslint-env node */
const fs = require('fs');

const countStudents = (patharg) => {
  const prom = new Promise((resolve, reject) => {
    // to read it asynchronously
    fs.readFile(patharg, 'utf-8', (err, line) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const data = line.split('\n');
        // console.log(data);
        let x = 0;
        const fields = {};
        let countStu = 0;
        let mess = '';

        const lines = () => {
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
        };
        // a asynchronous func to output to terminal
        const tolog = async () => {
          lines();
          console.log(`Number of students: ${countStu}`);
          mess += `Number of students: ${countStu}\n`;

          // accessing fields object keys, and assigning cou to num
          // and joining the first names with , to stufn
          for (const fi of Object.keys(fields)) {
            const num = fields[fi].cou;
            const stuFn = fields[fi].stu.join(', ');

            console.log(`Number of students in ${fi}: ${num}. List: ${stuFn}`);
            mess += `Number of students in ${fi}: ${num}. List: ${stuFn}\n`;
          }
          // mess = mess.slice(0, -1);
        };
        // call out the asynchronous func
        tolog();
        resolve(mess);
      }
    });
  });
  return prom;
};

module.exports = countStudents;
