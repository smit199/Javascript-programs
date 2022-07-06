var n1 = +prompt("Enter first number");
var n2 = +prompt("Enter second number");

var gcd = (a,b) => {return (a==0) ? b : ((b==0) ? a : gcd(b,a%b));};
console.log(`Greatest Common Factor of ${n1} and ${n2} is`);
console.log(gcd(n1,n2));