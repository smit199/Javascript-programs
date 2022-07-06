let n = +prompt("Enter a number");

isHappy(n) ? alert(`${n} is a happy number`) :
  alert(`${n} is not a happy number`);

let start = window.performance.now();
isHappy(n);
let end = window.performance.now();
alert(`Time taken: ${end-start}`);

function isHappy(num) {
  let map = new Map();
  while(1) {
    if(num==1 || num==7)
      return true;
    if(num>0 && num<10)
      return false;
    if(map.has(num))
      return false;
    map.set(num, 1);
    num = sumOfSquare(num);
  }
}

function sumOfSquare(num) {
  num = num+'';
  let sum=0;
  let arr = num.split('').map(item => +item);
  for(let item of arr)
    sum += item*item;
  return sum;
}