// 1. Define Product Interface
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
  }
  
  // Function to print Product details
function printProductDetails(product: Product): void {
    
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price}`);
  
  // if description is provided, it returns true
  // if description is not provided, it returns false
    if (product.description) {
      console.log(`Description: ${product.description}`);
    }
    console.log('-------------------');
  }
  
  // Example products
  const prod1: Product = { id: 1, name: "Laptop", price: 80000 };
  const prod2: Product = { id: 2, name: "Phone", price: 40000, description: "Latest model" };
  
  printProductDetails(prod1);
  printProductDetails(prod2);
  
  
  
  // 2. Define User Interface
  interface User {
    username: string;
    email: string;
    phoneNumber?: string; // Optional property
  }
  
  // Function to create User
  function createUser(username: string, email: string, phoneNumber?: string): User {
    return { username, email, phoneNumber };
  }
  
  // Example users
  const user1 = createUser("john_doe", "john@example.com");
  const user2 = createUser("alice", "alice@example.com", "123-456-7890");
  
  console.log(user1);
  console.log(user2);
  
  
  
  // 3. Function to calculate discounted price
  function calculateDiscountedPrice(price: number, discountPercent?: number): number {
    if (discountPercent) {
      return price - (price * discountPercent) / 100;
    }
    return price;
  }
  
  // Example usage
  console.log(calculateDiscountedPrice(1000)); // No discount
  console.log(calculateDiscountedPrice(1000, 10)); // 10% discount
  
  
  
  // 4. Bonus: Array of Products
  const products: Product[] = [
    { id: 1, name: "Table", price: 5000 },
    { id: 2, name: "Chair", price: 2000, description: "Comfortable" },
    { id: 3, name: "Sofa", price: 30000 }
  ];
  
  // Function to print products without description
  function printProductsWithoutDescription(products: Product[]): void {
    console.log("Products without description:");
    products.forEach(product => {
      if (!product.description) {
        console.log(product.name);
      }
    });
  }
  
  printProductsWithoutDescription(products);
  