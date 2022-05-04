/* Activity 8:
Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.
*/

let lastVowel = ''
let lastVowelPos = -1
const string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
const vowls = [
    string.lastIndexOf("a"),
    string.lastIndexOf("e"),
    string.lastIndexOf("i"),
    string.lastIndexOf("o"),
    string.lastIndexOf("u")
];
lastVowelPos = Math.max(...vowls)
console.log(`The last vowel is [${vowls}], found at the position ${string.lastIndexOf(lastVowelPos)} from the end.`);