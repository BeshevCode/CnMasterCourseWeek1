//Activity 3:
//of days from today to your birth date.
//Hint
//Look for ‘Javascript Date’ on MDN.

const today = new Date();
   // Returns the date in milliseconds

const thisYear = today.getFullYear()
   // Gives you current year

const birthDay = new Date( 1989, 04, 03 )
   // Gets the birthday (as a date) in milliseconds
const millsPerDay = 24 * 60 * 60 * 1000;
   // Calculates how many seconds are in a day 
   // And then, from birthday you subtract today, and you get a difference in milliseconds. Then you divide that by the number of millis in a day and you get the number of days

  let  i = today - birthDay;
  let  numberOfDays = i / millsPerDay;

  console.log(`My birthday is on ${birthDay} and the number of days until my birthday are ${numberOfDays}.`);