let str = prompt("Enter a string");
let strrev = "";
for(let i=str.length-1; i>=0; i--) {
  strrev += str[i];
}
alert(`reversed string is\n${strrev}`);