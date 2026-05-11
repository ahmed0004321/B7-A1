# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

One of the most powerful features of TypeScript is Generics. They allow you to write functions, classes, and interfaces that work with a variety of types while still maintaining full type safety. Without generics, you face a choice: either write the same logic repeatedly for each type, or use `any` and lose type safety entirely. Generics give you a third, better option — write it once, keep it typed.

---

## The Problem Generics Solves

Imagine you want a function that returns the first element of an array. Without generics, you might write it like this:

```typescript
function getFirstNumber(arr: number[]): number {
  return arr[0];
}

function getFirstString(arr: string[]): string {
  return arr[0];
}
```

This is repetitive. The logic is identical — only the types differ. You could try `any` to fix the duplication:

```typescript
function getFirst(arr: any[]): any {
  return arr[0];
}

const result = getFirst([1, 2, 3]);
result.toUpperCase();
```

Using `any` compiles fine but defeats the purpose of TypeScript. The return type is `any`, so TypeScript can't catch mistakes.

---

## Introducing Generics

Generics solve this with a **type parameter** — a placeholder that gets filled in when the function is actually called:

```typescript
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]);         // TypeScript automatically infers T as number
const str = getFirst(["a", "b", "c"]);  // TypeScript infers T as string
```

`T` is just a name — a convention. TypeScript infers it automatically from what you pass in. The function stays flexible, but every usage is fully typed.

---

## Generic Functions with Constraints

Sometimes you need to restrict what types `T` can be. You do this with the `extends` keyword:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");  // "John Doe" — TypeScript knows this is a string
getProperty(user, "id");    // 1 — TypeScript knows this is a number
getProperty(user, "email"); // Error: Argument of type '"email"' is not assignable
```

Here, `K extends keyof T` constrains `K` to only keys that actually exist on `T`. TypeScript also knows the exact return type based on which key you access.

---

## Generic Interfaces

Generics work on interfaces too, letting you define reusable data shapes:

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Alice" },
  status: 200,
  message: "Success",
};

const productResponse: ApiResponse<Product> = {
  data: { id: 5, title: "Laptop", price: 999 },
  status: 200,
  message: "Success",
};
```

One interface, infinite reuse — all strictly typed.

---

## When to Use Generics

1. The logic of your function or class is the same regardless of type
2. You need the output type to depend on the input type
3. You want to avoid duplicating code without sacrificing type safety
4. You're building utility functions, data structures, or reusable components

---

## Conclusion

Generics are what make TypeScript truly scalable. They let you write flexible, reusable code without ever reaching for `any`. Whether you're building a utility function, a data structure, or an API wrapper, generics ensure your code stays strictly typed no matter what data flows through it.