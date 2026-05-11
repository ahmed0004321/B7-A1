//Problem-1

const filterEvenNumbers = (num: number[]) => {
  const evenNum = num.filter((num) => num % 2 === 0);
  return evenNum;
};

//Problem-2

const reverseString = (reverse: string) => {
  const rev = reverse.split("").reverse().join("");
  return rev;
};

//Problem-3

type StringOrNumber = string | number;

const checkType = (checking: StringOrNumber) => {
  if (typeof checking === "string") {
    return "String";
  } else if (typeof checking === "number") {
    return "Number";
  }
};

//Problem-4

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

//Problem-5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return { ...book, isRead: true };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

//Problem-6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const student = new Student("Alice", 20, "A");

//Problem-7

const getIntersection = (arr1: number[], arr2: number[]) => {
    const arr:number[] = arr1.filter(num => arr2.includes(num))
    return arr;
};