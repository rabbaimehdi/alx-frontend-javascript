namespace Subjects {
  interface Teacher {
    firstName: string;
    lastName: string;
  }

  class Subject {
    teacher : Teacher
    setTeacher(teacher : Teacher) {
        this.teacher = teacher
    }
  }
}
