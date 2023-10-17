//myFunction concatenates two strings with ouput name "sentence" and sends to id "concatenate" in html page to print as clickable link and text after event handler click.

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book";
    document.getElementById("concatenate").innerHTML = sentence;
}
//secondFunction is a second function with id="link"
function secondFunction() {
    var sentence = "ok, this is number two";
    sentence += " lets see how it goes";
    document.getElementById("second").innerHTML = sentence;
}

//thirdFunction is addition function with id="dave" 

function thirdFunction(a, b) {
return a + b;
}



