//Activity 1:
//Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.
//Stretch
//Update all of your variables and write out a new sentence underneath your original.

Array.prototype.rand_sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Number.prototype.rand_sample = function () {
  returnValue = Math.floor(Math.random() * this.valueOf());
  return returnValue;
};

const data = {
  firstNameList: ["Jim", "John", "James", "Adam", "Dom", "Callum", "Harry"],
  lastNameList: ["Cross", "Lawrence", "Mathews", "Armitt"],
  colorList: ["Orange", "Yellow", "Red", "Green", "Blue"],
};

const maxAge = 100;

console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);

console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);

console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);

console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);

console.log(
  `My Name Is ${data.firstNameList.rand_sample()} ${data.lastNameList.rand_sample()}, I Am ${maxAge.rand_sample()} And My Favourite Colour Is ${data.colorList.rand_sample()}`
);