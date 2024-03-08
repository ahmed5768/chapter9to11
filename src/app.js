// Task no 01
var city = prompt("Enter Your City")
if(city === "karachi"){
    alert("Welcome to city of lights")
}
else{
    alert("Welcome to the city")
}

// Task no 02
var gender = prompt("Enter Your Gender")
if(gender === "male"){
    alert("Good Morning Sir")
}
else if(gender === "female"){
    alert("Good Morning Maam")
}
else{
    alert("not available")
}

// Task no 03
var signal = prompt("Enter Signal Color", "Red, Yellow, Green")
if(signal === "Red"){
    alert("Must Stop")
}
else if(signal === "Yellow"){
    alert("Ready to move")
}
else if(signal === "Green"){
    alert("Move now")
}
else{
    alert("No signal color")
}

// Task no 04
var fuel = prompt("Remainig fuel in your car")
if(fuel < 0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("The fuel in your car is full")
}

// Task no 05
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Task no 06
document.write("<h1>Marksheet</h1>")
var marksObtained = prompt("Enter Your Marks")
var percentage = marksObtained * 100 / 300
if(percentage >= 80){
    document.write("Total Marks : 300" + "</br>")
    document.write("Marks Obtained : " + marksObtained + "</br>") 
    document.write("Percentage : " + percentage + "%"+ "</br>")
    document.write("Grade : A-one" + "</br>")
    document.write("Remarks : Excellent" + "</br>")
}
else if(percentage >= 70){
    document.write("Total Marks : 300" + "</br>")
    document.write("Marks Obtained : " + marksObtained + "</br>") 
    document.write("Percentage : " + percentage + "</br>")
    document.write("Grade : A" + "</br>")
    document.write("Remarks : Good" + "</br>")
}
else if(percentage >= 60){
    document.write("Total Marks : 300" + "</br>")
    document.write("Marks Obtained : " + marksObtained + "</br>") 
    document.write("Percentage : " + percentage + "</br>")
    document.write("Grade : B" + "</br>")
    document.write("Remarks : You need to improve" + "</br>")
}
else if(percentage < 60){
    document.write("Total Marks : 300" + "</br>")
    document.write("Marks Obtained : " + marksObtained + "</br>") 
    document.write("Percentage : " + percentage + "</br>")
    document.write("Grade : Fail" + "</br>")
    document.write("Remarks : Sorry" + "</br>")
}
else{
    alert("Enter Your Marks")
}

// Task no 07
var secretNumber = prompt("Enter Ranging Number 1 to 10")
if(secretNumber == 6){
    alert("“Bingo! Correct answer”.")
}
else{
    alert("“Close enough to the correct answer”.")
}

// Task no 08
var divi = prompt("Enter any number")
if(divi%3 === 0){
    alert(divi + " is divisible by 3.")
}
else{
    alert(divi + " is not divisible by 3")
}

// Task no 09
var evenOrOdd = prompt("Enter even number or an odd number.")
if(evenOrOdd%2 === 0){
    alert(evenOrOdd + " even number")
}
else{
    alert(evenOrOdd + " odd number")
}

// Task no 10
var temprature = prompt("Enter a temprature")
if(temprature >= 40){
    alert("“It is too hot outside.”")
}
else if(temprature >= 30){
    alert("“The Weather today is Normal.”")
}
else if(temprature >= 20){
    alert("“Today’s Weather is cool.”")
}
else if(temprature >= 10){
    alert("“OMG! Today’s weather is so Cool.”")
}
else{
    alert("Enter a temprature")
}

// Task no 11
