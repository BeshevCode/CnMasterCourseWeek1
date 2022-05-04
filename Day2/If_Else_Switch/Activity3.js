/* Activity 3:
Create a variable called password.
Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.
*/

let password = "12345678";

if (password.length < 8) {
console.log("The password is too short");
}
else {
console.log(`${password}`);
}
