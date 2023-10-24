
//While loop//
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 16) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//String Length function//
function String_Length() {
    let String = "Click to see length of this sentence in characters.";
    let X = String.length;
    document.getElementById("string").innerHTML = X;
}
//For Loop//
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Array example//
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
//Array function//
function different_waves_array() {
    var Wave_Style = [];
    Wave_Style[0] = "Point Break";
    Wave_Style[1] = "Reef Break";
    Wave_Style[3] = "Beach Break";
    Wave_Style[4] = "Big Wave";
    document.getElementById("Array").innerHTML = "Let's go surf that " + Wave_Style[1] + ", it's my favorite type of wave!";
}
//Constant Function//
function constant_function() {
    const Vehicle = {Type: "Motorcycle", brand: "Harley-Davidson", color: "Black"};
    Vehicle.color = "white";
    Vehicle.price = "$5000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Vehicle.color + " " + Vehicle.brand + " was " + Vehicle.price + ".";
}

//Let keyword assignment//
function let_function() {
    let X = 10;
    document.getElementById("x").innerHTML = X;
}
   function  myfunction() {
    return Math.PI;
   }
   document.getElementById("return").innerHTML = myfunction();

//returning hello plus name//
   document.getElementById("hello").innerHTML = returnHello("John");
   function returnHello(name) {
    return "Hello " + name;
   }

   //Object //

   let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color +
        this.make + this.model;
    }
   };
   document.getElementById("car_Object").innerHTML = car.description();

  //Break example//
    let i = 0;
    while (i < 6) {
        if (i === 3) {
            break
        }
        i = i + 1;
    }
    console.log(i);
//Break Statement//
   let text = "";
   for (let i=0; i<10; i++) {
    if (i===3) {break;}
    text += "The number is " + i + "<br>";
   }
   document.getElementById("demo").innerHTML = text;

//Continue Statement//
    let text2 = "";
    for (let i = 0; i < 10; i++) {
    if (i===3) {continue;}
    text += "The number is " + i + "<br>";
   }
   document.getElementById("continue").innerHTML = text2;