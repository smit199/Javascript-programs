let str = prompt("Enter a string");
let char = prompt("Enter character to count occurence");
let count=0;

for(let i=0; i<str.length; i++) {
  str[i] == char && count++;
}

alert(`count of ${char} is ${count}`);