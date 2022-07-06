let expirydate = Date.parse(prompt("enter date to countdown from 'YYYY-MM-DDTHH:mm:ss.sssZ' format"));

if(!Number.isNaN(expirydate)) {
  
  let x = setInterval(function() {
    
    let curdate = Date.now();
    let countdown = expirydate - curdate;

    if(countdown<0) {
      clearInterval(x);
      document.getElementsByClassName("expiry")[0].innerHTML = "Time is expired";
    }
    else {
      document.getElementsByClassName("days")[0].innerHTML = Math.floor(countdown/(24*60*60*1000));
      
      let remaining = countdown % (24*60*60*1000);
      document.getElementsByClassName("hours")[0].innerHTML = Math.floor(remaining/(60*60*1000));
      
      remaining = remaining % (60*60*1000);
      document.getElementsByClassName("minutes")[0].innerHTML = Math.floor(remaining/(60*1000));
      
      remaining = remaining % (60*1000);
      document.getElementsByClassName("sec")[0].innerHTML = Math.floor(remaining/1000);
    }
  
  }, 1000);
}
else
  alert('invalid format');