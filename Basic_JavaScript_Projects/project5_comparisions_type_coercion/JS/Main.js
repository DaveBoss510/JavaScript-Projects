//Typeof operator-number//
document.write(typeof 3 + "<br><br>");
//Typeof operator-string//
document.write(typeof "word" + "<br><br>");
//Typeof coercion//
document.write("10" + 5 + "<br><br>");
//NaN 0/0//
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

document.write(isNaN(NaN));

//NaN word function//
function text() {
document.getElementById("nan").innerHTML = isNaN('This is a string');
}

//NaN number function//
function numFunction() {
    document.getElementById("dave").innerHTML = isNaN('007');
}
//Infinity//
document.write("<br><br>" + 2E310);
//Negative Infinity//
document.write("<br><br>" + -3E310 + "<br><br>");
//false//
document.write(10<2);

document.write("<br><br>");
//True//
document.write(10>2);

document.write("<br><br>");
//Console addition//
console.log (2+2);

//True ==//
document.write(10 == 10);
document.write("<br><br>");

//False ==//
document.write(3==11);

document.write("<br><br>");

//True === same data type and value//
x = 1;
y = 1;
document.write(x === y);
document.write("<br><br>");

//False === different data type, different value//
c= 11;
d= "bob";
document.write(c === d);
document.write("<br><br>");

//False === different data type, same value//
e=5
f="five"
document.write(e === f);
document.write("<br><br>");

//False === same data type, different value//
a="dave";
b="davo";
document.write(a === b);
document.write("<br><br>");

//True AND operator//
document.write(5 > 2 && 10 > 4);
document.write("<br><br>");

//False AND operator//
document.write(5 > 4 && 5 > 10);
document.write("<br><br>");

//True OR operator//
document.write(5>10 || 10 > 5);
document.write("<br><br>");

//False OR operator//
document.write(5 > 10 || 4 > 10);


//Not function true//
function not_Function() {
document.getElementById("Not").innerHTML = !(5 > 10);
}

//Not function false//
function no_Function() {
    document.getElementById("NO").innerHTML = !(5 < 10);
}