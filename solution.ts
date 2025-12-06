// Problem-1
type ReturnValue = string | number | boolean;

const formatValue = <T extends ReturnValue>(value: T): ReturnValue => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
};

// const result = formatValue(false);
// console.log(result);

// Problem 2
type DataType = string | any[];
const getLength = (value: DataType): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Unsupported type");
};

// console.log(getLength([2,3,4,'dj']));

// Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

//Problem 4
type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arrayOfItems: Item[]): Item[] => {
  return arrayOfItems.filter((item) => item.rating >= 4);
};

//  const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

// Problem 5

type Users = {
  id: number | string;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (arrayOfUsers: Users[]): Users[] => {
  return arrayOfUsers.filter((user) => user.isActive === true);
};

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

// Problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bookDetails: Book) => {
  console.log(
    `Title: ${bookDetails.title}, Author: ${bookDetails.author}, Published: ${
      bookDetails.publishedYear
    }, Available: ${bookDetails.isAvailable === true ? "Yes" : "No"}`
  );
};

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: false,
// };

// printBookDetails(myBook);

// Problem 7

type Values = number | string;
const getUniqueValues = (array1: Values[], array2: Values[]): Values[] => {
  const resultArray: Values[] = [];

  const pushUniqueValueInArray = (value: Values) => {
    let isSame = false;

    for (let item of resultArray) {
      if (item === value) {
        isSame = true;
        break;
      }
    }

    if (!isSame) {
      resultArray.push(value);
    }
  };

  for (const value of array1) {
    pushUniqueValueInArray(value);
  }

  for (const value of array2) {
    pushUniqueValueInArray(value);
  }

  return resultArray;
};

// const array1 = [1, 2, 3, 4, 5,7,8,9,'shad'];
// const array2 = [3, 4, 5, 6, 7,'shad','hi'];
// console.log(getUniqueValues(array1, array2));

// Problem 8

// type Discount = number & { _brand: "Discount_0_100" };
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (value: Product[]): number => {
  if (value.length > 0) {
    const totalPrice = value.map((item) => {
      let discount = 0;
      const totalPriceThroughQuantity = item.price * item.quantity;
      if (
        item.discount !== undefined &&
        item.discount >= 0 &&
        item.discount <= 100
      ) {
        discount = (item.discount / 100) * totalPriceThroughQuantity;
      }
      const totalPriceWithDiscount = totalPriceThroughQuantity - discount;

      return totalPriceWithDiscount;
    });

    return totalPrice.reduce((sum, price) => sum + price, 0);
  } else {
    return 0;
  }
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
