//Ternay Operator//
function RideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Rode").innerHTML = Can_ride + " to ride.";
}
//Ternay Operator Voter assignment//
function voteFunction() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

//Eriks car example constructor function//
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


//My own constructor function//
function Surfboard(Color, Length, Fins) {
    this.Surfboard_Color = Color;
    this.Surfboard_Length = Length;
    this.Surfboard_Fins = Fins;
}
var Dave = new Surfboard("Green", 6, " Twin");
var Andy = new Surfboard("White", 11, "Single");
function davFunction() {
    document.getElementById("New_and_This").innerHTML = "Dave rides a " + Dave.Surfboard_Length + " foot" +
    Dave.Surfboard_Fins + "  fin surfboard every day.";
}

//Nested function lesson example//
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();

    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
  
    //My own nested function //
function subtract_Function() {
    document.getElementById("Nested_Function").innerHTML = subtract();

    function subtract() {
        var Ten_lemons = 10;
        function Use_one() {Ten_lemons -= 1;}
        Use_one();
        return Ten_lemons;
    }
}