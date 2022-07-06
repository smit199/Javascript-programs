var num = +prompt("Guess any number between 1 to 100");

var random = Math.floor(Math.random()*100);

if(random==num)
  alert("Your guess is correct");
else
  alert("Your guess is incorrect");