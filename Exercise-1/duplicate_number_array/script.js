let arr = [56, 23, 56, 8, 9, 8, 8, 25, 25];

let map = new Map();
arr.forEach((item) => {
  if(map.has(item)) {
    let i = map.get(item);
    map.set(item, ++i);
  }
  else
    map.set(item, 1);
});

console.log("duplicate elements in array are:")
for(let key of map.keys()) {
  if(map.get(key)>1)
    console.log(key);
}

