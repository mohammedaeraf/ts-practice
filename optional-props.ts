interface User {
  username: string;
  age?: number; // Optional property
}

const user1: User = { username: "John" };
const user2: User = { username: "Jane", age: 30 };

console.log(user1); // Output: { username: 'John' }
console.log(user2); // Output: { username: 'Jane', age: 30 }
