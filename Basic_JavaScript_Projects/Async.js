

function count_To_Ten() {
    var Digit = "";
    Var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting_To_Ten").innerHTML = Digit;
}