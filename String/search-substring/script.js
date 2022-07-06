let str = prompt("enter a string");
let substr = prompt("Enter substring to search");

let pos = str.indexOf(substr);
pos<0 ? alert("not found") : alert(`found at ${pos} index`);