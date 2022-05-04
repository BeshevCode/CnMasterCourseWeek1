/* Activity 2:
Create an object called pet with the key values of: name, typeOfPet, age, colour

And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.
*/

const pet = {
    name: "Nola",
    typeOfPet: "dog",
    age: 4,
    color: "brown",
    eat(){
        console.log(`Your pet ${this.name} is eating.`);
    },
    drink(){
        console.log(`Your pet ${this.name} is drinking.`);
    }
};

pet.eat();
pet['drink']();