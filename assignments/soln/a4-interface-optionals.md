# 📚 TypeScript Assignment 04: Interface, Optional Parameters, and Optional Properties

## **Tasks:**

### 1. Create an interface `Product`
- Fields:
  - `id: number`
  - `name: string`
  - `price: number`
  - `description?: string` (optional property)
- Create a function `printProductDetails(product: Product)` that prints the product details.
  - If the description exists, print it; otherwise, skip it.

---

### 2. Create an interface `User`
- Fields:
  - `username: string`
  - `email: string`
  - `phoneNumber?: string` (optional property)

- Create a function `createUser(username: string, email: string, phoneNumber?: string)`:
  - This function should return an object of type `User`.
  - If `phoneNumber` is not provided, it should still create the user.

---

### 3. Create a function `calculateDiscountedPrice`
- Signature: `(price: number, discountPercent?: number) => number`
- If `discountPercent` is provided, apply it to calculate the discounted price.
- If no `discountPercent` is provided, assume 0% discount.

---

### 4. Test the above
- Create a few `Product` and `User` objects with and without optional properties.
- Call all functions and display the outputs.

---
