//search name from array of objects
let arr = [
  { name:"smit", age:25, weight:80},  
  { name:"ramesh", age:25, weight:60},
  { name:"smit", age:22, weight:70},
  { name:"mahesh", age:38, weight:97},
  { name:"ramesh", age:30, weight:27},
  { name:"smit", age:58, weight:72},
];
console.log(arr);

let name = prompt("Enter name to search");
let fun = item => item.name==name;
let choice = +prompt("enter 0 to search for first matching elements and 1 for all matching elements");

//to return only first matching element
if(choice==0) {
  let obj = arr.find(fun);
  
  obj ? 
    console.log(`${name} is found at index ${arr.findIndex(fun)}`):
    console.log(`${name} not found in array`);
  
  //if obj is not undefined then only print
  obj && console.log(`age and weight of ${name} is: ${obj.age} and ${obj.weight}`);
}

//to return all matching elements
else if(choice==1) {

  //add position of object in all items and then filter
  let obj = arr.map( (item, index) => { item['position'] = index; return item; }).filter(fun);
  
  obj.length ? 
    console.log(`${name} is found at ${obj.length} position`):
    console.log("not found");
  
  for(let item of obj) {
    console.log(`at position ${item.position}: age=${item.age} and weight=${item.weight}`);
  }
  
}

else
  alert("invalid choice");