class Book {
    title: string;
    author: string;
    price: number;

    constructor(t: string, a: string, p: number) {
        this.title = t;
        this.author = a;
        this.price = p;
    }

    getSummary() : string {
        return `${this.title}, written by ${this.author}, price at ${this.price}`;
    }
}

let book: Book = new Book('Atomic Habits', 'James Clear', 600);
let bookSummary: string = book.getSummary();
console.log(bookSummary);
// Pls attempt creating classes for Product, Course, Student