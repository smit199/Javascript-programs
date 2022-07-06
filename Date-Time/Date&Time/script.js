let date = new Date();
alert(`current date is\n${date}`);

date.setFullYear(date.getFullYear() - 2);
date.setMonth(date.getMonth() - 5);
date.setDate(date.getDate() + 30);
date.setHours(8, 50, 25);
alert(`new date is\n${date}`);
alert(`timestamp for the date is ${date.getTime()} milliseconds}`);
