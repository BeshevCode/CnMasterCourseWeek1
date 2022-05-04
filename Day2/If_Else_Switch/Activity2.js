/* Activity 2:
Create a variable for any pizza topping.
Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
Finally, for any topping you don’t like log “${topping} should not be on a pizza.”
*/

let topping1 = "mushrooms";
let topping2 = "beef";
let topping3 = "chicken";
let topping4 = "pepperoni";
let topping5 = "sweet corn";
let toppings = [topping1, topping2, topping3, topping4, topping5];

switch(toppings) {
  case topping1 = "mushrooms":
    console.log('These are important ingredients for my pizza');
    break;
  case topping2 = "beef":
    console.log('These are important ingredients for my pizza');
    break;
  case topping4 = "pepperoni":
    console.log("I don't mind having pepperoni on my pizza.");
    break;
  default:
    console.log("Chicken and sweet corn should not be on a pizza.");
}
