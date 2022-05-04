/* Activity 1:
Let’s edit our person object to include...
A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”
*/

let person ={
    name: 'Nikolay',
    age: 32,
    sayHi() {
        console.log(`Hello my name is ${this.name}`);
    }
};

console.log(person);
person.sayHi();