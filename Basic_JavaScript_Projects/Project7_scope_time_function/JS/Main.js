//Global Variable//
var A = 100;
function lets_add() {
    document.write(100 + A + "<br><br>")
}
function lets_subtract() {
    document.write(A - 100 + "<br><br>")
}

lets_add();
lets_subtract();

//Local Variable Example-browser wont 
//print function let_me_subtract() because var 
//is in local let_me_add function//
function let_me_add() {
    var B = 100;
    document.write(B + 100 + "<br><br>")
}
function let_me_subtract() {
    document.write(B - 50 + "<br><br>")  
}

let_me_add();
let_me_subtract();
//console.log() Method//
function let_me_add() {
    var B = 100;
    console.log(B + 100);
}
    function let_me_subtract() {
        console.log(B - 50);
    }
let_me_add();
let_me_subtract();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//if else function class example//
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//my if else function//
function Rated_R_Movie() {
    viewer_age = document.getElementById("Input_id").value;
    if (viewer_age >= 17) {
        View = "You are old enough to see the Rated R movie";
    }
    else {
        View = "You are NOT old enough to see the Rated R movie";
    }
    document.getElementById("output_id").innerHTML = View;
}

//Time Function//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}