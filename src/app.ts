// type AddFn = (a: number, b: number) => number;
// interface function
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (number1: number, number2: number) => {
  return number1 + number2;
};

interface Named {
    readonly name: string;
    outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };
class Person implements Greetable, Named {
  name: string;
  age: number = 30;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Person;

user1 = new Person("Max");
user1.greet("Hi there - I am");
