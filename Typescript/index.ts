// let message:string = "Done!";
// console.log(message);
interface Todo {
    title:string
    status :Status
}
enum Status {
    PENDING ='pending',
    DOING = 'Doing',
    COMPLETED = 'Completed'
}

function isStatus(status:string):boolean{
    return Object.values(Status).includes(status as Status)
}

console.log(isStatus('pending'));

//primitive data
let username: string = 'rahul';
let age: number = 23;
let isAdmin :Boolean = true;

//Array and tuple
let numbers:number[] = [1,2,3];
let user:[string,number] = ["Rishi",22];
let useState:[number,Function] =[1,( )=> console.log("user name.....state")];

//Any,Unknown,void,never
let data: any;
let value:unknown;
function log():void{}{
    console.log("Void Function.....");
};

data = 10;
data ='name';
data = true;
console.log(data);

value = 10;
value = 'name';
console.log(value);

function count(value:number):number{
    return value;
}

function countStr(value:number):string{
    return 'ababab';
}

function crash():never{
    throw new Error("boom");
}
// crash()

let city = 'dff';

let id : unknown;
id = null;
console.log(String(id).length);

let a : unknown;
let b : unknown;
a = '12345.12';
// b = Number(Number(a) - 9)
console.log(Number(a));
// console.log(parseInt(a));
// console.log(parseFloat(a));


let values: unknown[] = [0, 1, "", "hello", null, undefined, [], {}];

for (const value of values) {
  console.log(Boolean(value));
}

function getLength(value: unknown): number {
    return String(value).length;
}
console.log(getLength(123));
console.log(getLength("hello"));
console.log(getLength(null));

function createCounter(){
    let count = 10;
    return function(){
        console.log(count);
        return ++count;

    }
}

const counter = createCounter();

counter();
counter();

const products: { id: number; name: string; price: number }[] = [
    { id: 1, name: 'ABC', price: 999 },
    { id: 2, name: 'RRR', price: 499 },
    { id: 3, name: 'XYZ', price: 75 }
];
console.log(products);
console.log(products[2]);

class Person {
    name: string; 
    age: number; 
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    introduce(): void {
      console.log("Hi, I'm "+ this.name + " and I'm "+ this.age + " years old.");
    }
  }
  
  const person1 = new Person("Rishi", 20);
  person1.introduce(); 

  class animal {
    speak(): void {
      console.log("speak");
    }

    walk(legs:number,hands:number):void{
    }
  }
  
  class dog extends animal {
    bark(): void {
      console.log("bark");
    }
  }
  
  class human extends animal {
    speak(): void {
        console.log("Human Speaks");
    }
  }
  const myDog = new dog();
  myDog.speak();
  myDog.bark();

  const kirrish = new human();
  kirrish.speak();