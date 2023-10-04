namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }

    export class Java {
        getRequirements() {
            return ('Here is the list of requirements for React');
        }
        getAvailableTeacher() {
        return (this.teacher.experienceTeachingJava > 0? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher');
    }
    }
}