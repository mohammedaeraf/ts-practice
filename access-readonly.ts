// Class representing a student
class Student {
  readonly studentId: number; // Read-only property to store the student's ID
  readonly name: string; // Read-only property to store the student's name

  // Constructor to initialize the read-only properties
  constructor(studentId: number, name: string) {
    this.studentId = studentId; // Sets the student ID (can only be set in the constructor)
    this.name = name; // Sets the student name (can only be set in the constructor)
  }
}

// Create an instance of the Student class with a student ID and name
const student = new Student(1234, "Aisha");

// Access and log the read-only property 'studentId'
console.log(student.studentId); // 1234 ✅ Allowed because read-only properties can be accessed

// Attempting to modify the read-only property will result in an error
// student.studentId = 5678; // ❌ Error: Cannot assign to 'studentId' because it is a read-only property
