 //Ctrl-alt j in chrome for dev tools +++
            

//================================
//Variables and Strings

/*
var firstName = "John";
var lastName = "Smith";
var dataOfBirth = "10-09-82";
var age = "23";
var profileImageUrl = "http://myPic.com/pic.jpg";

//concatenation. ('age' is auto converted into string):
var loginWelcomeMessage = "Welcome " + firstName + ". Happy " + age + "rd birthday!";

console.log(loginWelcomeMessage);
*/

//================================
/*
//Numbers in JavaScript

//all numbers are floating point (whether decimal point is shown or not)
var age = 23;
var age2 = 23.556;

var sum = 10 + 15;
var sub = 15 - 10;
var mul = 10 * 3;
var div = 9/3;
var mod = 10 % 3; //gives the remainder in a division operator

var msg = "10/3 = 3 with a remainder of " + mod;

var result = 10 * ((5 + 3) - 4) //order of operations in parenthesis


console.log(result);
*/
//================================
//Comparison Operators in JavaScript
 /*           
 if (1 == 1){
	 console.log("Yo!")
 }
 
 var myAccountBalance= 300;
 var nikeShoes = 799.23;
 var coupon = 500;
 
// == equal value
// === same value and data type
// <= less than or equal to
// >= greater than or equal to
// !== not equal to

var val1 = 23;
var val2 = "23";

if (val1 === val2){
	console.log("These are the same!");
}else{
	console.log("One of these is not like the other....");
}
*/
//================================
//Logical Operators in JavaScript
/*
if (1 == 1 && 2 == 2 || "Joe" == "Joe"){
	console.log("These are both true");
}

if (true && true){
	console.log("These are the same");
}

if (true && false){
	console.log("These are the same");
}


if (1 == 3 || "Joe" == "Joe"){
	console.log("One of these is true");
}

var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisabledHandicap = true;

if(cat1 > cat2 && cat1 > cat3 && !cat3DisabledHandicap){
	console.log("Cat1 is the cutest!");
}else if (cat2 > cat1 && cat2 > cat3 && !cat3DisabledHandicap){
	console.log("Cat2 is the cutest!");
}else if (cat3 > cat1 && cat3 > cat2 || cat3DisabledHandicap){
	console.log("Cat3 is the cutest!");
}
*/
//================================
//JavaScript Arrays
/*
var studentNames = ["Timmy", "Janessa", "Arun"];

var naughtyList = [];

naughtyList.push(students[0]); //add to array

console.log(naughtyList);

var index = naughtyList.indexOf("Timmy"); //returns the index of "Timmy", OR -1 if not found

if (index > -1){
	naughtyList.splice(index, 1); //splice the array at the index, and remove 1 element ("Timmy"). ++++++++
}

console.log(naughtyList);


var person = ["John", 23, true] //can accept mixed data types. NOT RECOMMENDED!! 

*/
//================================
//JavaScript Loops


/*
var total = 10;

for (var i=0; i< total; i++){
	console.log(i);
}
*/

/*
var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];

for (var i=0; i< students.length; i++){
	console.log(students[i]);
}
*/

//================================
//JavaScript Functions

/*

//make a function 
function areaFunc(length, width){
	return length * width;
}

//call function
var area1 = areaFunc(10, 15);
console.log(area1);

var rectanglesAreas = [];
rectanglesAreas.push(areaFunc(10, 15));
rectanglesAreas.push(areaFunc(14, 2));
rectanglesAreas.push(areaFunc(4, 5));


console.log(rectanglesAreas);

//---

var bankBalance = 500;

function makeTransaction(priceOfSale){
	if (priceOfSale <= bankBalance){
		bankBalance -= priceOfSale;
		console.log("Purchase Successful");
	}else{
		console.log("Insufficient Funds");
	}
	
}

console.log(bankBalance);
makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(2.32);
console.log(bankBalance);
makeTransaction(10.45);
console.log(bankBalance);
makeTransaction(450.00);


//Storing a function in a variable (anonymous function)+++++++++++++++++++++++++++++++++++
//allows function to be stored in an array for example
var transaction = function(priceOfSale){
	if (priceOfSale <= bankBalance){
		bankBalance -= priceOfSale;
		console.log("Purchase Successful");
	}else{
		console.log("Insufficient Funds");
	}
	
}

transaction(10);


var printCustomerName = function(first, last){
	console.log("First Name: " + first + " Last Name: " + last);
}


var applyForcredit= function(creditScore, soul){
	//call some functions to process application
}


//array to hold all of above functions:
var bankOpperations = [];

//store functions in array:
bankOpperations.push(transaction);
bankOpperations.push(printCustomerName);
bankOpperations.push(applyForcredit);

*/

//================================
//JavaScript Objects //++++++++++++++++++++++++++++++++

//Objects are like 'Hash tables', containing 'keys' and 'values'.

/*
//create an object, way 1 
//This is a 'literal' object, as it has data in during creation
var student0 = {
	firstName: "Mary", //a 'property' with a 'key' and 'value'
	lastName: "Sue",
	age: 8,
	greeting: function(){ //a function inside an object
		return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."; //'this' refers to the properties inside the object (global object scope, not local function scope). 
	}
}; //Dont forget colon!! :P


console.log(student0.greeting()); //calling function within object
*/

/*
//print values:
console.log(student.firstName); //'dot syntax' grabs the keyname, which returns the value
console.log(student.lastName);

//another way of printing:
console.log(student["firstName"]); //accessing by the name of the key.
console.log(student["lastName"]);
*/

/*
//create an object, way 2
var student1 = new Object(); //creates a new empty object
student1.firstName = "John"; //add values
student1.lastName = "Parker";
student1.age = 7;

//create an object, way 3
var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;


//add student objects to array:
var students = [];
students.push(student0);
students.push(student1);
students.push(student2);

for (var i=0; i<students.length;i++){
	console.log(students[i]);
}
*/


/*

//a function for creating objects: //++++++++++++++++++++++++++++
function Student(first, last, age){
	
	this.firstName = first; //creating keys ('this.keyname') and assigning values to them during creation 
	this.lastName = last;
	this.age = age;
	this.greeting = function(){ //a function inside an object
		return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."; //'this' refers to the properties inside the object (global object scope, not local function scope). 
	}
	
}

var students = [];

//==
//var s1 = new Student("Jenny", "Laga", 5);
//console.log(s1);
//console.log(s1.greeting());
//==


//create Student objs and push to array.
students.push(new Student("Jenny", "Laga", 5));
students.push(new Student("Timmy", "Turner", 8));
students.push(new Student("Carl", "Jr", 4));


for (var i=0; i<students.length;i++){
	var student = students[i]; //temp var to grab student
	console.log(student.greeting());
}


//==

var studentTest = students[0];


//'for in' loop:
for (var key in studentTest){ //go through each key in student
	console.log(studentTest[key]); //print the key values
}

//==
*/
//================================
//JavaScript Bind //++++++++++++++++++++++++++++++++


this.car = "Honda Civic with ugly spoiler"; //'this' in this case refers to the main script file

var marksGarage = {
	car: "Aston Martin",
	getCar: function(){
		return this.car; //'this' here is scoped within this function
	}
};


console.log(marksGarage.getCar());
//console.log(car);

//store getCar function in variable.
//storing the function here, changes the scope of 'this' to refer to the outer 'this' ++++++++++++
var storeGetCarForLater = marksGarage.getCar; 

//call stored function:
console.log(storeGetCarForLater());

//BINDING: 

//One way of binding object to function:
//var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage); 

//Another way of binding object to function:
var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage); //the bind function allows you to define the scope of your function ('marksGarage' in this instance)

//call the function var with the bound function:
console.log(theRealGetCarFunction());


//================================









 