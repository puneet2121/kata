// let name = 'nitin';

////////////   split method split the string into array //////////////////
// const arrayName = name.split('');

// console.log(arrayName)

//////////////   Reverse method used for reversing an array //////////////
// const reverseArray = arrayName.reverse();
// console.log(reverseArray)

///////////////////  Join method is used to convert an array to string ///
// let reverseName = reverseArray.join('');
// console.log(reverseName);

let name = 'punee t '
let newName = name.split(' ').join('')
console.log(newName);

const palindrome = (str) => {
  let reverseStr = str.toUpperCase().split('').reverse().join('');
  if(reverseStr === str.toUpperCase()) {
    console.log('This string is palindrome ');
  }
  else {
    console.log('This string is not a plaindrome')
  }
}
palindrome('NItin')
