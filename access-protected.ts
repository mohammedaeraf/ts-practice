class Character {
  protected health: number;

  constructor(health: number) {
    this.health = health;
  }

  getHealth(): number {
    return this.health;
  }
}

// Inheritance - means creating a child class from the parent class
class Warrior extends Character {
  attack() {
    console.log(`Attacking with health: ${this.health}`);
  }
}

const hero = new Warrior(100);
hero.attack(); // ✅ Inside subclass
hero.getHealth();
// console.log(hero.health); ❌ Error
