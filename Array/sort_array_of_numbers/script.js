let nums = [2, 8, 5, 7, 76, 63, 15, 45];
alert(`numbers in sorted order without using function arguement\n${nums.sort()}`);

let fun = (a,b) => a-b;
alert(`numbers in right sorted order\n${nums.sort(fun)}`);