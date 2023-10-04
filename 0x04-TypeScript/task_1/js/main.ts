interface Teacher {
    firstName: string,
    lastName: string,
    location: string,
    fullTimeEmployee: true | false,
    yearsOfExperience?: number,
    contract?: true | false
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
  const chars = firstName.charAt(0);

  return (`${chars}.${lastName}`);
}

interface printTeacherFunction {}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return ('Currently working');
  }

  displayName() {
    return (`${this.firstName}`);
  }
}