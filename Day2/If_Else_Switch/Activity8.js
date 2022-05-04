/* Activity 8:
Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.
*/

//const string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';

const vowels = 'aeiou'
const someString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let lastVowel = ''
let lastVowelPos = -1

for(const vwl of vowels){
    const foundPos = someString.lastIndexOf(vwl)
    if (foundPos>-1 && foundPos>lastVowelPos) 
        [lastVowel, lastVowelPos] = [ vwl, foundPos ]
}

if (lastVowelPos > -1) 
    console.log(`The last vowel is '${lastVowel}', found at the position ${lastVowelPos}`);
else 
    console.log('No vowel was found in the string');

/*let vowelsPosList = [
      someString.lastIndexOf("a")
    , someString.lastIndexOf("e")
    , someString.lastIndexOf("i")
    , someString.lastIndexOf("o")
    , someString.lastIndexOf("u")
]
lastVowelPos = Math.max(...vowelsPosList)

console.log(`The last vowel is on the position '${lastVowelPos}'`)
*/