/* Activity 7:
Research on do...while loop, find out about the difference between
for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?
*/

// all for loops allow us to repeat a loop for a predefined number of times, more or less (ex. of less)
for (let i = 0; i < 5; i++) 
    console.log(i);

console.log()
for (let a of [11,22,33,44]) 
    console.log(a);

console.log()
for (let a in {name:"Christopher Robin", age:21}) 
    console.log(a);

console.log()
// this one runs forever - you can exit with break
for (let i = 10; true; i--)
    if (i <= 5) break; 
    else console.log(i);


// while allows us to run a loop while a condition is true, 
// the pro is that it will test the condition before executing the block of code
// the con (for me) is that most of the time you have to setup the vars used in the condition before the while loop
console.log()
let childFlag = true
while (childFlag) {
    const num = Math.floor(Math.random()*30)
    console.log(`You\'re ${num} years old, ${ num>=20?'an adult':'a child' }`);
    childFlag = num < 20
}

// do while loops will run the block of code at least once before checking the condition
// the pro is that you can set up the vars used by the condition in the block of code and it runs at least once if thats what you need
// the con is that it runs at least once, even if the condition evaluates to false
// another con is that you can't use variables that are declared in the block with let/const
do {
    weight = Math.floor(Math.random()*120)
    console.log(`You weight ${weight} kg${ weight<85?'.':', slightly larger than expected.' }`);
} while(weight < 85);