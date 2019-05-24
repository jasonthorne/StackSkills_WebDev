//variables that store a html element:
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

/*
numField1.value = "test"; //'value' for input fields
resultField.innerText = "test"; //'innerText' for text
*/

//create a form var:
var form = document.getElementById('xIsWhatPercentOfY'); 

//add a 'submit' event listener to the form (for our button (of type 'submit') which is inside the form).
//IMPORTANT: form submissions refresh pages by default and wipe all data from it. SO we add an event parameter to our function +++++++++++++++++++++++++++++++++++++
//(the 'submit' event, which is then passed into our function), and call the '.preventDefault' to stop that! +++++++++++++++++++++++++++++++++++++
form.addEventListener('submit', function(event){
	//anonymous in-line function thats called when event is triggered:
	
	
	//form validation:
	if(!numField1.value || !numField2.value){ //if fields are null or undefined ('!' checks for both)
		alert("Please enter values in the fields");
	}else{
		var x = parseFloat(numField1.value); //convert string to float
		var y = parseFloat(numField2.value); //convert string to float
		
		var result = x / y; //find x/y in decimal
		var percent = result * 100; //find percentage
		
		//show answer to user:
		resultField.innerText = "Answer: " + percent + "%";
		
		//prevent the form from default refreshing and wiping data: +++++++++++++++++++++
		event.preventDefault();
	}
	
});