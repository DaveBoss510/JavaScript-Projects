localStorage.setItem("Name", "Dax");
document.getElementById("Demo").innerHTML = localStorage.getItem("Name");


var dog = '{"name": "Dax", "breed": "Great Pyrenees", "color": "White"}';
var JSONstring = JSON.parse(dog);
document.getElementById("hi").innerHTML = JSONstring.name + " the " + JSONstring.breed;

