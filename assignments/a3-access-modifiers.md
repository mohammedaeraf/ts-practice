
# 📚 TypeScript Assignment 3: Access Modifiers

## **Objective:**
Practice using `public`, `private`, `protected`, and `readonly` in TypeScript classes to understand how they control access.

---

## **Tasks:**

### 1. Create a class called `Employee`
- Fields:
  - `public name: string`
  - `private salary: number`
  - `protected department: string`
  - `readonly employeeId: number`
- Constructor should initialize all the fields.
- Create a method `public getDetails()` that returns employee's name and department (but not salary).
- Create a method `private calculateBonus()` that returns 10% of salary.

---

### 2. Create a subclass called `Manager` extending `Employee`
- Add a new `public` field `teamSize: number`.
- Create a method `public getManagerInfo()` that:
  - Displays manager’s name, department, and team size.
- Try accessing `salary` inside the `Manager` class (it should give an error ❌).
- Try accessing `department` inside the `Manager` class (it should work ✅).

---

### 3. Test the classes
- Create an object of `Manager` class.
- Try accessing `salary` and `department` from outside the class (observe errors).
- Try updating the `employeeId` field after object creation (observe error because it's readonly).

---

## **Bonus Challenge ✨**
- Add a private method `increaseSalary(percent: number)` inside `Employee` class that increases the salary based on percentage.
- Call this private method using a public method `giveRaise(percent: number)`.

---

# 🧠 **Expected Learnings:**
- How `public`, `private`, `protected`, and `readonly` control access
- Practical use of modifiers in real-world class designs
- Importance of encapsulation
