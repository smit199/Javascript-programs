let user1 = {
  name: "smit",
  age: 20,
  weight: 60
};

console.log(`user1 name: ${user1.name} age: ${user1.age} weight: ${user1.weight}`);

// clonning object using assignment operator
let user2 = user1;
console.log("user1 object cloned as user2 using assignmement");
console.log(`user2 name: ${user2.name} age: ${user2.age} weight: ${user2.weight}`);

user2.name = "ramesh";
console.log("name of user2 is changed to " + user2.name);
console.log(`Now name of user1 is: ${user1.name} (changed)`);

//clonning object using for loop
let user3 = {};
for(let key in user1) {
  user3[key] = user1[key];
}
console.log("user1 object cloned as user3 using for loop");
console.log(`user3 name: ${user3.name} age: ${user3.age} weight: ${user3.weight}`);

user3.name = "mahesh";
console.log("name of user2 is changed to " + user3.name);
console.log("Now name of user1 is: " + user1.name);

//clonning object using assign method
let user4 = {};
Object.assign(user4, user1);
console.log("user1 object cloned as user4 using for loop");
console.log(`user4 name: ${user4.name} age: ${user4.age} weight: ${user4.weight}`);

user4.name = "mohan";
console.log("name of user4 is changed to " + user4.name);
console.log("Now name of user1 is: " + user1.name);