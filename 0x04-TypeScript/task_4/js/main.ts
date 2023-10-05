/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

const Cpp: Subjects.Cpp = new Subjects.Cpp();
const Java: Subjects.Java = new Subjects.Java();
const React: Subjects.React = new Subjects.React();

let cTeacher: Subjects.Teacher {
    firstName = 'John',
    lastName = 'Smith',
    experienceTeachingC = 10,
}

console.log('C++');

Cpp.setTeacher = cTeacher;
console.log(Cpp.getRequirements());
console.log(Cpp.getAvailableTeacher());

Java.setTeacher = cTeacher;
console.log(Java.getRequirements());
console.log(Java.getAvailableTeacher());

React.setTeacher = cTeacher;
console.log(React.getRequirements());
console.log(React.getAvailableTeacher());