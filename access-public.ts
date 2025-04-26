class Product {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const laptop = new Product("MacBook", 1500);
console.log(laptop.name); // ✅ Public access
