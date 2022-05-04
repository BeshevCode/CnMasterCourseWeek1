/* Activity 1:
Have a go at logging a grid like this to the console.
Stretch:
If you figure it out, try researching arrays and loops and see if you can do it that way.
*/

grid = ("-----------\n" + "   |   |   \n".repeat(3))
  .repeat(3)
  .replace("-----------", "");
console.log(grid);