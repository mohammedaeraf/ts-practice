// Define a type alias 'Id' that can be either a number or a string
type Id = number | string;

// Declare a variable 'id' of type 'Id' and assign it a numeric value
let id: Id = 101;

// Reassign the variable 'id' with a string value (valid because 'Id' allows both number and string)
id = "A123";

// Log the value of 'id' to the console
console.log(`This is my ID - ${id}`); // Outputs: This is my ID - A123
