

// Encapsulation

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public withdraw(amount: number) {
    // check first if user has balance
    this.balance -= amount;
  }

  // getter function
  public getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
// account.balance = 5000; ❌ Cannot access
account.deposit(500);
console.log(account.getBalance()); // 1500
//   console.log(account.balance);
