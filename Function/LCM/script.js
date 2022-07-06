var n1 = +prompt("Enter first number");
var n2 = +prompt("Enter second number");

var gcd = (a,b) => {return (a==0) ? b : ((b==0) ? a : gcd(b,a%b));};
console.log(`Least Common Multiple of ${n1} and ${n2} is`);
console.log(n1*n2/gcd(n1,n2));