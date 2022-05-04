/* Activity 4:
Displays 4 films stored in an array.
Use a for loop to show each film in the array.
Use an if statement to check if the 3rd film in the array is Ghostbusters.
If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!
*/

let filmList = [
  'Film 1',
  'Film 2',
  'Film 3',
  'Film 4'
];

for (let i = 0; i < filmList.length; i++) {
  console.log(filmList[i])
};

if (filmList[2] == "Ghostbusters")
  console.log("Yay the 3rd film it's Ghostbusters")
else
  console.log("The 3rd film isn't Ghostbusters. Boo! we want Ghostbusters!");