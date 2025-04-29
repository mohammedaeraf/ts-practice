// Define a type 'Person' to represent a person with basic details
type Person = {
    name: string;       // The name of the person
    age: number;        // The age of the person
    nationality: string // The nationality of the person
  };
  
  // Define a type 'Employee' to represent an employee with an employee ID
  type Employee = {
    employeeId: number; // The unique ID of the employee
  };
  
  // Create a new type 'Staff' using an intersection of 'Person' and 'Employee'
  // The 'Staff' type must include all properties from both 'Person' and 'Employee'
  type Staff = Person & Employee;
  
  // Create an object 'staffMember' of type 'Staff'
  // This object must have all properties from both 'Person' and 'Employee'
  const staffMember: Staff = { 
    name: "Alice",       // Property from 'Person'
    age: 25,             // Property from 'Person'
    nationality: "British", // Property from 'Person'
    employeeId: 1234     // Property from 'Employee'
  };
  
  // Log the 'staffMember' object to the console
  console.log(staffMember); // Output: { name: 'Alice', age: 25, nationality: 'British', employeeId: 1234 }