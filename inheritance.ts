class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log(this.name);
    console.log(this.age);
  }
}

class Student extends Person {
  public studentId: string;

  constructor(name: string, age: number, id: string) {
    super(name, age); // super is used to call parent class constructor and function
    this.studentId = id;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(this.studentId);
  }
}

const student: Student = new Student("John", 25, "10897");
student.displayInfo();
