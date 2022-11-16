function rentalCarCost(d) {
  // Your solution here
  const cost = 40;
  if (d < 3) {
    return d * cost;
  } else if (d >= 3 && d < 7) {
    return d * cost - 20;
  } else {
    return d * cost - 50;
  }
}
console.log(rentalCarCost(7));
