/* Activity 1:
Create an array that lists your favourite films, up to
5 elements.
Add 2 more using a method.
Use a loop to cycle through the array
*/

let favoriteFilms = [
  'Favorite film 1',
  'Favorite film 2',
  'Favorite film 3',
  'Favorite film 4',
  'Favorite film 5'
];

favoriteFilms.push('Favorite film 6', 'Favorite film 7');

for (let i = 0; i < favoriteFilms.length; i++){
  console.log(favoriteFilms[i]);
};
