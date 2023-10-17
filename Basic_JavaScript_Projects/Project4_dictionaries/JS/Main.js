//my_Dictionary function is my Dictionary holding KVP's//
function my_Dictionary() {
    var Vehicle = {
        Brand: "Ford",
        Make: "Bronco",
        Color: "Blue",
        Year: 2023,
        Transmission: "Manual"
    };
    // I deleted the "make" key from my_Dictionary function//
        delete Vehicle.Make;
        document.getElementById("D").innerHTML = Vehicle.Make;
}   