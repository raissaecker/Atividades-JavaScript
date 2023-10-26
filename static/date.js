//create a date
let d1 = new Date(2012, 1, 20, 3, 12);
alert(d1);

//how many seconds have passed today?
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
  }
  
  alert(getSecondsToday());