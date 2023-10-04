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

const row1 = document.cre
