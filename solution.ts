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
const getLength = (value: DataType) : number =>{

    if(typeof value === 'string'){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length
    }

    throw new Error("Unsupported type");
    
}

// console.log(getLength([2,3,4,'dj']));






// Problem 3
class Person{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails (){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());






//Problem 4
type Item = {
  title:string;
  rating:number;
}

 const filterByRating = (arrayOfItems : Item[]): Item[] =>{
  return arrayOfItems.filter(item =>item.rating >= 4);

 }

