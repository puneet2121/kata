let x = 1;
while(x <= 100){
  if (x % 3 === 0 && x % 4 === 0 ){
    console.log("LoopyLighthouse")
  }
  else if(x % 3 === 0){
    console.log("Loopy")
  }
  else if (x % 4 === 0){
    console.log("Lighthouse")
  }

  else{
    console.log(x)
  }
  x++

 
}

