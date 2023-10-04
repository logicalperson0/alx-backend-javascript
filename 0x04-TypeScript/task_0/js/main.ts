interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

function createstudents(student: Student) {
  firstname: student.firstName;
  lastname: student.lastName;
  age: student.age;
  location: student.location;
}

const student1 = createstudents({ firstname: 'Moses', lastname: 'smith', age: 40, location: 'NY' });
const student2 = createstudents({ firstname: 'Noah', lastname: 'xersus', age: 80, location: 'Tokyo' });

const studentsList = [student1, student2];

const table = document.createElement('table');

const row1 = document.createElement('tr');
const row2 = document.createElement('tr');

const data1 = document.createElement('td');
const data2 = document.createElement('td');
const data3 = document.createElement('td');
const data4 = document.createElement('td');

data1.innerHTML = ;
data2.innerHTML = ;

row1.appendChild(data1);
row1.appendChild(data2);

data3.innerHTML = ;
data4.innerHTML = ;

row2.appendChild(data3);
row2.appendChild(data4);

table.appendChild(row1);
table.appendChild(row2);