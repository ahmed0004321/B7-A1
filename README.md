# Assignment: Advanced Problem Solving with TypeScript & OOP

## Overview

This repository contains solutions to a TypeScript assignment covering fundamental concepts including data typing, interfaces, class inheritance, type guards, and generics. It also includes two blog posts on selected TypeScript topics.

---

## File Structure

```
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

---

## Problem Solving (solutions.ts)

### Problem 1 — filterEvenNumbers
Accepts an array of numbers and returns a new array containing only the even numbers.

### Problem 2 — reverseString
Takes a string as input and returns its reversed version.

### Problem 3 — checkType
Defines a union type `StringOrNumber` and uses type guards to return `"String"` or `"Number"` based on the input type.

### Problem 4 — getProperty
A generic function that takes an object and a key, and returns the value of that key. Uses `K extends keyof T` to ensure the key exists on the object.

### Problem 5 — toggleReadStatus
Accepts a `Book` object (with `title`, `author`, and `publishedYear`) and returns a new object with an added `isRead` property defaulting to `true`.

### Problem 6 — Person & Student Classes
A `Person` class with `name` and `age`, extended by a `Student` subclass that adds a `grade` property and a `getDetails()` method.

### Problem 7 — getIntersection
Takes two arrays of numbers and returns a new array containing only the elements present in both arrays.

---

## Blog Posts

### blog-1.md — `any` vs `unknown` and Type Narrowing
Explains why `any` is a type safety hole and why `unknown` is the safer choice for handling unpredictable data. Covers type narrowing with `typeof`, `instanceof`, and custom type guards.

### blog-2.md — Generics in TypeScript
Explains how generics allow you to build reusable, strictly typed functions, interfaces, and classes regardless of the data structures passed in.

---

## How to Run

1. Install TypeScript globally if not already installed:
   ```bash
   npm install -g typescript
   ```

2. Compile the solution file:
   ```bash
   tsc solutions.ts
   ```

3. Run the compiled output:
   ```bash
   node solutions.js
   ```