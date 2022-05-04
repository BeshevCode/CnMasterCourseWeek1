//Activity 3:
//of days from today to your birth date.
//Hint
//Look for ‘Javascript Date’ on MDN.

let birthDay = '3rd of May';
let today = new Date();
let millsPerDay = 24 * 60 * 60 * 1000;
let numberOfDays = today / millsPerDay

console.log(`My birthday is on ${birthDay} and the number of days until my birthday are ${numberOfDays}`);