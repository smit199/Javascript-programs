let colors = ['red', 'blue', 'yellow', 'green', 'grey'];

//splice
console.log(`deleted elemens are: ${colors.splice(1, 3, 'violet', 'brown')}`);
console.log(`now colors are: ${colors}`);
console.log("deleting last element and adding elements");
colors.splice(-1, 1, 'blue', 'golden', 'silver');
console.log(`now colors are: ${colors}`);

//slicing
console.log(`first 3 elements: ${colors.slice(0,3)}`);
console.log(`last 2 elements: ${colors.slice(-2)}`);
console.log(`2nd to 4th elements: ${colors.slice(1,4)}`);

//concatenation of arrays
let nums = [4,8,9];
let fruits = ['apple', 'mangoes'];
console.log(`concatenation of arrays is\n${colors.concat(nums, fruits)}`);