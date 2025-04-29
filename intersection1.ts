// Define an interface 'A' with a single property 'a' of type string
interface A {
  a: string;
}

// Define another interface 'B' with a single property 'b' of type number
interface B {
  b: number;
}

// Create an object 'obj' that satisfies both interfaces 'A' and 'B'
// The intersection type 'A & B' ensures that 'obj' must have all properties from both interfaces
let obj: A & B = {
  a: "Hello", // Property 'a' from interface 'A'
  b: 123, // Property 'b' from interface 'B'
};

// union ==> | (OR) - Combines types where a value can be one type or another
// intersection ==> & (AND) - Combines types where a value must satisfy all types
