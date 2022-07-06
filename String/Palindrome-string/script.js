let str = prompt("Enter a string");

let isPalindrome = str => {
  for(let i=0; i<str.length/2; i++) {
    if(str[i] != str[str.length-i-1])
      return false;
  }
  return true;
}

isPalindrome(str) ? 
  alert("palindrome string") :
  alert("not a palindrome string");