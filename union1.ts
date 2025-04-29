// Define a function 'printStatusCode' that accepts a parameter 'code'
// The parameter 'code' can be either a string or a number (union type)
function printStatusCode(code: string | number): void {
  // Log the status code to the console
  console.log(`My status code is ${code}.`);
}

// Call the function with a numeric status code
printStatusCode(404); // ✅ Valid: 'code' is a number

// Call the function with a string status code
printStatusCode("ERR404"); // ✅ Valid: 'code' is a string
