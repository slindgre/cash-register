"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
var runningsubtotal, runningtax, runningtotal;
runningsubtotal=0
runningtax=0
runningtotal=0
function Register(x){
  var subtotal, total, tax;
  subtotal = x;
  tax=x * .07
  total= subtotal + tax;
  runningsubtotal=runningsubtotal+subtotal;
  runningtax=runningtax+tax;
  runningtotal=runningtotal+total
}
var i=1
function clear() {
runningtotal=0;
runningsubtotal=0;
runningtax=0
i=i+1
}