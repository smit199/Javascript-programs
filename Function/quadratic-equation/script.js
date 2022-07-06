var a = +prompt("Enter value of a in quadratic equation");
var b = +prompt("Enter value of b in quadratic equation");
var c = +prompt("Enter value of c in quadratic equation");

var d = b*b - 4*a*c;
console.log(`roots of quadratic equation ${a}x^2+${b}x+c are:`);

if(d>0) {
  var root1 = (-b + Math.sqrt(d))/(2*a);
  var root2 = (-b - Math.sqrt(d))/(2*a);
  console.log(root1);
  console.log(root2);
}
  
else if (d == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(root1);
}

else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);
  console.log(`${realPart} + ${imagPart}i`);
  console.log(`${realPart} - ${imagPart}i`);
}