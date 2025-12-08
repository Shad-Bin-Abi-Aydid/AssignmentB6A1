type ReturnValue = string | number | boolean;

const formatValue = <T extends ReturnValue>(value: T): ReturnValue => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

type DataType = string | any[];
const getLength = (value: DataType): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

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

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arrayOfItems: Item[]): Item[] => {
  return arrayOfItems.filter((item) => item.rating >= 4);
};

type Users = {
  id: number | string;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (arrayOfUsers: Users[]): Users[] => {
  return arrayOfUsers.filter((user) => user.isActive === true);
};

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
