/* Activity 2:
Create an object called pet with the key values of: name, typeOfPet, age, colour

And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.
*/

let pet = {
    name:       "Cookie",
    typeOfPet:  "Cockatiel",
    age:        16,
    colour:     "Mostly Grey?",
    foodType:   "seed",
    eat: function () {
        return this.name+ " is eating " +this.foodType;
    },
    drink: function () {
        return this.name+ " is drinking water"
    }
};

console.log(pet.eat());
console.log(pet.drink());