/* Activity 6:
Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program.
> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
> Using a nested loop iterate over both arrays and console.log out the matching follower.
*/

let bobsFollowers = [
  "Anna Smith",
  "Suzan Edgard",
  "Sofia Zurachi",
  "Christopher Robin"
];

let hannahsFollowers = [
  "Anna Smith",
  "Peter MCkenzy",
  "Justine Khloshi",
  "Christopher Robin"
];

for(let fb of bobsFollowers)
    for(let fh of hannahsFollowers)
        if(fb.toLowerCase() == fh.toLowerCase())
            console.log(`Common follower: ${fb}`);