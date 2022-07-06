//program to print all prime numbers in given interval
var low = +prompt("Enter a lower number of interval");
var high = +prompt("Enter a higher number of interval");
console.log(`Prime numbers between ${low} and ${high} are:`);

for(var i=low; i<=high; i++) {
  var isPrime = () => {
      for(var j=2; j<i; j++) {
        if(i%j==0)
          return false;
      }
      return true;
    };
  
  if(isPrime() && i>1)
    console.log(i);
}



