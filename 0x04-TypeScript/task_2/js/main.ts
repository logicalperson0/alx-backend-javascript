interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return ('Working from home');
    }
    getCoffeeBreak() {
        return ('Getting a coffee break');
    }
    workDirectorTasks() {
        return ('Getting to director tasks');
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return ('Cannot work from home');
    }
    getCoffeeBreak() {
        return ('Cannot have a break');
    }
    workTeacherTasks() {
        return ('Getting to work');
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

function isDirector(employee: Director) {}

function executeWork(employee: any) {
    if (employee === Director) {
        return (Director.call(this.workDirectorTasks));
    } else {
        return (Teacher.call(this.workTeacherTasks));
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return ('Teaching Math');
    } else {
        return ('Teaching History');
    }
}