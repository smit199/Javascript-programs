var n = +prompt("Enter a number");
var fact = (num) => {
  return num==1 ? 1 : num*fact(num-1);
};
console.log(fact(n))