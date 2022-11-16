function doubleChar(str) {
  // Your code here
  let str2 = ''
  for(let i = 0; i < str.length; i++) {
    str2 = str2 + str[i].repeat(2)     
  }
  console.log(str2)
}

doubleChar('abcd')