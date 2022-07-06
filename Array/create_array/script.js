
let colors = ["red", "blue", "yellow"];
let fruits = new Array("apple", "mango", "banana");

console.log(`colors are: ${colors}`);
console.log(`fruits are: ${fruits}`);

//adding elements at end of array
colors.push("green", "violet");
console.log(`after push colors are: ${colors}`);

//pop last element from array
console.log(`popped element is: ${colors.pop()}`);
console.log(`after pop colors are: ${colors}`);

//adding elements at beginning of array
fruits.unshift("watermelon", "grapes", "lemon");
console.log(`after unshifting fruits are: ${fruits}`);

//deleting element from beginning of array
console.log(`deleted elements are: ${fruits.shift()}`);
console.log(`after shifting fruitss are: ${fruits}`);