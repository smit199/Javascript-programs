let str = prompt("Enter date in 'YYYY-MM-DDTHH:mm:ss.sssZ' format");
let time = Date.parse(str)
let date = new Date(time);

!Number.isNaN(time) ? 
  alert(`date: ${date}\ntimestamp: ${time}`) :
  alert('invalid format');