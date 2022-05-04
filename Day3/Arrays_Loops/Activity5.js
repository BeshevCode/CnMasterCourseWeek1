/* Activity 5:
Generate a random number between 1 and 30 six times.
For each random number generated, check if this number of divisible by 7 or not.
Log out a message to the console if it is divisible by 7 or not.
*/

for (i = 1; i < 7; i++) {
  let random = ([Math.floor(Math.random()*30)]);
  if (random % 7 == 0) {
    console.log(random +" is divisible by 7.");
  }
  else {
    console.log(random +" is NOT divisible by 7.");
  };
};

   //Numbers divisible by 2 between 0 and 20 are: 0,2,4,6,8,10,12,14,16,18.

   //this is the new thing