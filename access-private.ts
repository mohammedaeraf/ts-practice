// Encapsulation

// Class representing a bank account
class BankAccount {
  private balance: number; // Private property to store the account balance

  // Constructor to initialize the account balance
  constructor(balance: number) {
    this.balance = balance; // Sets the initial balance
  }

  // Public method to deposit an amount into the account
  public deposit(amount: number) {
    this.balance += amount; // Adds the deposit amount to the balance
  }

  // Public method to withdraw an amount from the account
  public withdraw(amount: number) {
    // Note: No validation is performed here to check if the balance is sufficient
    this.balance -= amount; // Deducts the withdrawal amount from the balance
  }

  // Getter function to retrieve the current balance
  public getBalance() {
    return this.balance; // Returns the current balance
  }
}

// Create an instance of the BankAccount class with an initial balance of 1000
const account = new BankAccount(1000);

// Attempting to directly access the private balance property will result in an error
// account.balance = 5000; ❌ Cannot access because 'balance' is private

// Deposit 500 into the account
account.deposit(500);

// Log the current balance to the console (should be 1500)
console.log(account.getBalance()); // 1500

// Attempting to directly log the private balance property will result in an error
// console.log(account.balance); ❌ Cannot access because 'balance' is private