// Class representing a product
class Product {
  public name: string; // Public property to store the name of the product
  public price: number; // Public property to store the price of the product

  // Constructor to initialize the name and price of the product
  constructor(name: string, price: number) {
    this.name = name; // Sets the product name
    this.price = price; // Sets the product price
  }
}

// Create an instance of the Product class with a name and price
const laptop = new Product("MacBook", 1500);

// Access and log the public property 'name' directly
console.log(laptop.name); // ✅ Public access: Allowed because 'name' is public
