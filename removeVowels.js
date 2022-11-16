
function disemvowel(str) {
  const noVowels = str.replace(/[aeiou]/gi, '');
  return noVowels
}
console.log(disemvowel("This website is for losers LOL!"))


////// ////////////// //////// OR /////////////////////////
// const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }