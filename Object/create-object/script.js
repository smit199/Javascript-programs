// Different ways to create objects
//using object literal
let user1 = {
  name: "smit",
  biodata : {
    age: 20,
    weight: 60,
  }
};

console.log("properties of object user1");
console.log("name: " + user1.name);
console.log("age: " + user1.biodata.age);
console.log("weight: " + user1.biodata.weight);

//using instance of object directly
let user2 = new Object({
  name: "ramesh",
  age: 25,
  weight: 80,
});

console.log("properties of object user2");
for(let key in user2) {
  console.log(key + ": " + user2[key]);
}
delete user2.weight;
console.log("after deleting weigh property of user2");
console.log(user2);

//using constructor function
function User(name) {
  this.name = name;
  this.biodata = function Biodata(age, weight) {
    this.age = age;
    this.weight = weight;
  }
}
let user3 = new User("mohan");
var bio = new user3.biodata(30,80);
console.log("properties of object user3");
console.log(user3.name);
console.log(bio.age);
console.log(bio.weight);