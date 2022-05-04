/* Activity 1:
Make an array of 3 your favorite songs.
3 of them.
Log them to the console.
Stretch:
Can you add another two songs to the list using a method and then remove the last one added? 
*/


let favoriteSongs = [
  "Godsmack - I Stand Alone",
  "Roxette - Joyride",
  "Hardy Caprio - Best Life ft. One Acen"

];

console.log(favoriteSongs.length);
console.log(favoriteSongs);
favoriteSongs.push('Afro B - Drogba (Joanna)');
favoriteSongs.push('MHD - Bodyguard');
console.log(favoriteSongs.length);
console.log(favoriteSongs);
favoriteSongs.pop();
console.log(favoriteSongs.length);
console.log(favoriteSongs);