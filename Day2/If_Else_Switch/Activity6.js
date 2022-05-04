/* Activity 6:
Create a variable called num.
Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).
*/

let num = 1020440201

let palindrome = ( num.toString() == num.toString().split('').reverse().join('') )

if (palindrome) {
  console.log(`The [> ${num} <] is a palindrome`);
} 
else {
  console.log(`The [> ${num} <] is NOT a palindrome`);
}

//let stringOfNum = num.toString()
//let palindrome = (stringOfNum == [...stringOfNum].split('').reverse().join('') )
// console.log(num.toString());
// console.log(num.toString().split(''));
// console.log(num.toString().split('').reverse());
// console.log(num.toString().split('').reverse().join(''));