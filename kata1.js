
function highAndLow(numbers){
  // ...
  let arrayNumbers= numbers.split(' ').map(Number);
  console.log(arrayNumbers)
  
  const sortArray = arrayNumbers.sort();
  console.log(sortArray)

 
  const minNumber = Math.min(...sortArray)
  const maxNumber = Math.max(...sortArray)
  console.log(maxNumber.toString() + ' ' + minNumber.toString())
}
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")

//   numbers = numbers.split(' ').map(Number);
//     console.log(numbers)
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);