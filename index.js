"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
var runningsubtotal, runningtax, runningtotal;
runningsubtotal=0
runningtax=0
runningtotal=0
function Register(item){
  var subtotal, total, tax;
  subtotal = prices[item];
  tax=prices[item] * .07;
  total= subtotal + tax;
  runningsubtotal=runningsubtotal+subtotal;
  runningtax=runningtax+tax;
  runningtotal=runningtotal+total
}
var i=1
function confirm() {
runningtotal=0;
runningsubtotal=0;
runningtax=0
i=i+1
}
function clear() {
runningtotal=0;
runningsubtotal=0;
runningtax=0;
}
function hamburger(){
	Register('hamburger');
	}
function cheeseburger(){
	Register('cheeseburger');
}
function corndog(){
	Register('crondog');
}
function drink(){
	Register('drink');
}
function sundae(){
	Register('sundae');
}
function coffee(){
	Register('coffee');
}