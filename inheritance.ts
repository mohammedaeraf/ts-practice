// Base class representing a generic person
class Person {
  public name: string; // Public property to store the name of the person
  public age: number;  // Public property to store the age of the person

  // Constructor to initialize the name and age of the person
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method to display the person's information
  displayInfo(): void {
    console.log(this.name); // Logs the name of the person
    console.log(this.age);  // Logs the age of the person
  }
}

// Derived class representing a student, which extends the Person class
class Student extends Person {
  public studentId: string; // Public property to store the student ID

  // Constructor to initialize the name, age, and student ID
  constructor(name: string, age: number, id: string) {
    super(name, age); // Calls the constructor of the parent class (Person)
    this.studentId = id; // Initializes the student ID
  }

  // Method to display the student's information
  displayInfo(): void {
    super.displayInfo(); // Calls the displayInfo method of the parent class
    console.log(this.studentId); // Logs the student ID
  }
}

// Create an instance of the Student class
const student: Student = new Student("John", 25, "10897");

// Call the displayInfo method to display the student's details
student.displayInfo();