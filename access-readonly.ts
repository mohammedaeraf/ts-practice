class Student {
  readonly studentId: number;
  readonly name: string;

  constructor(studentId: number, name: string) {
    this.studentId = studentId;
    this.name = name;
  }
}

const student = new Student(1234, "Aisha");
console.log(student.studentId); // 1234
// student.studentId = 5678; // ❌ Error: Cannot assign to 'studentId' because it is a read-only property
