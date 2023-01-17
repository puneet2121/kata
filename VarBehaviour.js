var b = 2;
function outer() {
  var b = 3; ////  We can define a variable multiple times with var
  //  but not with let or const
  function inner() {
    b++;
    var b = 6;
    console.log(b);
  }
  inner();
}
outer();