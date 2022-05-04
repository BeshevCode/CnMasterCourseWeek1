/* Activity 1:
Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.
Stretch
Take your if statement and add a variable called country in.
Eg. if age > 17 and country == “UK”.
*/

let age = 32;

if (age <= 17) {
  console.log(`You aren't old enough.`);
}
else if (age >= 18) {
  console.log(`Yes I can serve you.`);
}