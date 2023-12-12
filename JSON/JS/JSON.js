var dog = {name: "Dax", breed: "Great Pyrenees", color: "White"};
var JSONstring = JSON.stringify(dog);
document.getElementById("myDog").innerHTML = JSONstring;