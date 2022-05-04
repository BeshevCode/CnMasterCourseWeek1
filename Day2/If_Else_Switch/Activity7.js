/* Activity 7:
Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
*/

let time = 9;
let placeOfWork = "CodeNation";
let townOfHome = "Manchester";

if (time == 7) {
  console.log(`I am at ${townOfHome}.`);
}
else if (time == 8) {
  console.log(`I am at commuting.`);
}
else if (time == 9) {
  console.log(`I am at ${placeOfWork}.`);
}