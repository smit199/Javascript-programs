let arr = [1, 2, 3, 4, 5];
alert(arr);

for(let i=0; i<arr.length; i++) {
  let num = arr.pop();
  arr.splice(i, 0, num);
}
alert(`array after reverse using pop and splice\n${arr}`);
arr.reverse();
alert(`array after reverse using reverse method\n${arr}`);
