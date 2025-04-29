// Employee class
class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    readonly employeeId: number;
  
    constructor(name: string, salary: number, department: string, employeeId: number) {
      this.name = name;
      this.salary = salary;
      this.department = department;
      this.employeeId = employeeId;
    }
  
    // Public method
    public getDetails(): string {
      return `Employee: ${this.name}, Department: ${this.department}`;
    }
  
    // Private method
    private calculateBonus(): number {
      return this.salary * 0.1;
    }
  
    // Public method to give raise
    public giveRaise(percent: number): void {
      this.increaseSalary(percent);
    }
  
    // Private helper method
    private increaseSalary(percent: number): void {
      this.salary += (this.salary * percent) / 100;
    }
  
    // For checking salary inside the class
    public getSalary(): number {
      return this.salary;
    }
  }
  
  // Manager class extending Employee
  class Manager extends Employee {
    public teamSize: number;
  
    constructor(name: string, salary: number, department: string, employeeId: number, teamSize: number) {
      super(name, salary, department, employeeId);
      this.teamSize = teamSize;
    }
  
    public getManagerInfo(): string {
      // Can access department (protected) but not salary (private)
      return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`;
    }
  
    // Uncommenting below will give error ❌ because salary is private
    /*
    public tryAccessSalary(): number {
      return this.salary; // Error: 'salary' is private
    }
    */
  }
  
  // Testing the classes
  const manager1 = new Manager("Alice", 80000, "Sales", 101, 10);
  
  console.log(manager1.getDetails());      // ✅
  console.log(manager1.getManagerInfo());  // ✅
  
  console.log(manager1.name);               // ✅ Public, accessible
  console.log(manager1.teamSize);            // ✅ Public, accessible
  // console.log(manager1.salary);           // ❌ Error: salary is private
  // console.log(manager1.department);       // ❌ Error: department is protected
  
  console.log(manager1.employeeId);          // ✅ Readonly, can access
  // manager1.employeeId = 200;              // ❌ Error: Cannot assign to 'employeeId' because it is a read-only property
  
  // Giving raise
  manager1.giveRaise(10); // 10% raise
  // Checking new salary using public method (not directly!)
  console.log(manager1.getSalary()); // Salary after raise
  