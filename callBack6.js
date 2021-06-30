
console.log("JavaScript setInterval");

//Using setInterval() to display the time every second (1000 milliseconds)

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds());
  
}
