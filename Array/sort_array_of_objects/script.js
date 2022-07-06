let arr = [
  { name:"smit", age:25, weight:80},  
  { name:"ramesh", age:25, weight:60},
  { name:"smit", age:22, weight:70},
  { name:"mahesh", age:38, weight:97},
  { name:"ramesh", age:30, weight:27},
  { name:"smit", age:58, weight:72},
];

let display = () => { 
  for(let item of arr) 
    console.log(`name: ${item.name} age: ${item.age} weight: ${item.weight}`);
};
display();

let sortByAge = (a, b) => a.age - b.age;
arr.sort(sortByAge);
display();

let sortByWeight = (a, b) => a.weight - b.weight;
arr.sort(sortByWeight);
display();