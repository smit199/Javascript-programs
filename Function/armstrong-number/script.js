var num = prompt("Enter a number");
var sum=0;

for(var i=0; i<num.length; i++) {
  var n = +num.charAt(i);
  sum += n*n*n;
}

(sum==+num) ? 
  alert(`${num} is an armstrong number`) :
  alert(`${num} is not armstrong number`);