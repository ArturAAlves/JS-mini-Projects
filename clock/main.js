function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var msec = date.getMilliseconds();


  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  msec = msec < 100 ? "0" + msec : msec;


  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec + " : " + msec;

  setInterval(currentTime, 100);
}

currentTime(); /* calling currentTime() function to initiate the process */
