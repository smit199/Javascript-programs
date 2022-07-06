let start = Date.now();
let sum = sumOfCube(1000000);
let end = Date.now();

alert(`sum of cube first 1000000 numbers are: ${sum}`);
alert(`time taken by function is: ${end-start} milliseconds`);

function sumOfCube(n) {
  let sum=0;
  for(let i=1; i<=n; i++)
    sum += i*i*i;
  return sum;
}