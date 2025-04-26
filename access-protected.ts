// Base class representing a generic character
class Character {
  protected health: number; // Protected property, accessible within the class and its subclasses

  // Constructor to initialize the health of the character
  constructor(health: number) {
    this.health = health; // Sets the initial health value
  }

  // Public method to retrieve the health value
  getHealth(): number {
    return this.health; // Returns the current health
  }
}

// Inheritance - creating a child class (Warrior) from the parent class (Character)
class Warrior extends Character {
  // Method to simulate an attack, using the protected health property
  attack() {
    console.log(`Attacking with health: ${this.health}`); // Accessing the protected property
  }
}

// Create an instance of the Warrior class with an initial health of 100
const hero = new Warrior(100);

// Call the attack method, which uses the protected health property
hero.attack(); // ✅ Allowed because it's inside the subclass

// Call the getHealth method to retrieve the health value
hero.getHealth(); // ✅ Allowed because it's a public method

// Attempting to directly access the protected health property will result in an error
// console.log(hero.health); ❌ Error: 'health' is protected and cannot be accessed outside the class or its subclasses
