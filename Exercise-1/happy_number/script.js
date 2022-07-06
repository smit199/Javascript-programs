let n = +prompt("Enter a number");

isHappy(n) ? alert(`${n} is a happy number`) :
  alert(`${n} is not a happy number`);

let start = window.performance.now();
isHappy(n);
let end = window.performance.now();
alert(`Time taken: ${end-start}`);

function isHappy(num) {
  let slow, fast;
  slow = fast = num;
  do {
    slow = sumOfSquare(slow);
    fast = sumOfSquare(sumOfSquare(fast));
  } while(slow!=fast);
  return (slow==1);
}

function sumOfSquare(num) {
  num = num+'';
  let sum=0;
  let arr = num.split('').map(item => +item);
  for(let item of arr)
    sum += item*item;
  return sum;
}