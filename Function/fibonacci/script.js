var num = +prompt("Enter number of terms:");
var n1=0, n2=1, temp;
for(var i=1; i<=num; i++) {
  console.log(n1);
  temp = n1+n2;
  n1 = n2;
  n2 = temp;
}