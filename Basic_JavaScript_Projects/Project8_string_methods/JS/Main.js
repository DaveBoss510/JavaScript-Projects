function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("bob").innerHTML = whole_sentence;
}
//Concatenating a String function// 
function string() {
    var part_1 = "I am learning";
    var part_2 = " how to use JavaScript";
    var part_3 = " today.";
    var complete = part_1.concat(part_2, part_3);
    document.getElementById("dan").innerHTML = complete;
}
//Slice string function//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

//My slice function//
function sliceMethod() {
    var Sentence = "Portugal is a pretty wild place, and I love it.";
    var Section = Sentence.slice(0, 31);
    document.getElementById("piece").innerHTML = Section;
}
//toUpperCase()//
function toUpperCase() {
    var Sentence = "dave boss is learning code";
    var Section = Sentence.toUpperCase();
    document.getElementById("upper").innerHTML = Section;
}

//Search() Method//
function searchFunction() {
    var Sentence = "dave boss is learning code";
    var Section = Sentence.search("code");
    document.getElementById("search").innerHTML = Section;
}

//Number Method//
function stringMethod() {
    var A=182;
    document.getElementById("string").innerHTML = A.toString();
}

//Precision Method//
function precision_Method() {
    var B = 12938.39288474849383728449328272
    document.getElementById("pre").innerHTML = B.toPrecision(8);

}

//toFixed() Method//
function toFixed() {
    var C = 3.0988894859585958595859585958;
    var D = C.toFixed(3);
    document.getElementById("fix").innerHTML = D;
}

//valueOf() Method//
    var x = "<br><br>" + "Dave is currently coding";
    document.write(x.valueOf());

