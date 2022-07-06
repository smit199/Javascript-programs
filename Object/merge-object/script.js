let user = {
  name: "smit",
  hobbies: ['reading', 'dancing', 'cricket'],
};

let biodata = {
  age: 20,
  weight: 25,
};

let education = {
  collage: "LDCE",
}

console.log("merging objects user, biodata and education");
Object.assign(user, biodata, education);

for(let key in user) console.log(`${key}: ${user[key]}`);

