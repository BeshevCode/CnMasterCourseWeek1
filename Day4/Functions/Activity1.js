/* Activity 1:
Take this code and turn it into arrow function syntax:

function factorial (n) {
  if ((n === 0) || (n === 1)) {
    return 1;
  }
  else {
    return (n * factorial(n-1));
  }
}
 consiole.log(factorial(33));
*/

const factorial = (n) => {
    if ( (n===0) || (n==1) ) {
        return 1;
    } 
    else {
        return n * factorial(n-1);
    }
};

console.log(factorial(33));
console.log(factorial(4));