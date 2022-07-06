let arr = [5, 6, 7, 20, 7, 3.6, 5, 6];
console.log(arr);
let num = +prompt("enter number to search");

arr.indexOf(num)>=0 ?
  console.log(`${num} is present at ${arr.indexOf(num)}`) :
  console.log(`not found`);

arr.lastIndexOf(5)>=0 ? console.log(`${num} is present at ${arr.lastIndexOf(num)} by searching from last`) :
  console.log("not found");


