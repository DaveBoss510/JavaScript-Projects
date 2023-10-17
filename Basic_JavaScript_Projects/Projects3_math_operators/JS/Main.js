//addition function//
function myFunction(x, y) {
    let result = x + y;
document.getElementById("Math").innerHTML = "4 + 3 = " + result;
}
//subtraction function//
function subtractFunction() {
    var Sub = 5 - 2;
    document.getElementById("okay").innerHTML = "5 - 2 = " + Sub;
}
//multiply funcion//
function multiply() {
    var outcome = 6 * 8;
    document.getElementById("yep").innerHTML = "6 x 8 = " + outcome;
}
//divide function//
function divide() {
    var div = 48 / 6;
    document.getElementById("sure").innerHTML = "48 / 6 = " + div;
}
//multiple operator function//
function more() {
    var many = (1+2) * 10/2-5;
    document.getElementById("cup").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + many;
}
//remainder operator function//
function remainderdiv() {
    var Rdiv = 25 % 6;
    document.getElementById("yes").innerHTML = "when you devide 25 by 6 you have a remainder of: " + Rdiv;
}
//negative operator function//
function negOp() {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}
//incriment function//
function incriment() {
var B = 5;
B++;
document.getElementById("in").innerHTML = B;
}
//decrement function//
function decrement() {
    var C = 5;
    C--;
    document.getElementById("dec").innerHTML = C;
}
//window alert random number 0-100//
window.alert(Math.random() * 100);
//math property(constants) function//
function E1() {
    var D = Math.E + 1;
document.getElementById("E").innerHTML = D ;
}
//random number 1-100 function//
function random() {
    var R = (Math.random() * 100);
    document.getElementById("rand").innerHTML = R;
}
//math methods, rounded integer function//
function round() {
    var Z = Math.round(4.6);
    document.getElementById("up").innerHTML = Z;
}