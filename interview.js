const reccusstion = (number) => {
  if(number = 17){
    console.log(17);
    return;
  }
  else {
    return reccusstion(number++);
  }
}

console.log(reccusstion(2));