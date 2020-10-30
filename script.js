// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
}

function generatePassword() {
	//Alert Instructions
	alert('When selecting your answers, please keep in mind that *OK=Yes* and *Cancel=No* :)')

	//User Inputs For Prompts and Confirms

	var lengthPrompt = parseInt(prompt('Please choose a password between 8-128 characters.'
	));
	var upperConfirm = confirm(
		'Do you want upper case letters in your password?'
	);
	var lowerConfirm = confirm(
		'Do you want lower case letters in your password?'
	);
	var specialConfirm = confirm(
		'Do you want special characters in your password?'
	);
	var numConfirm = confirm('Do you want numbers in your password?');

	//Var Numbers, Uppercase, Lowercase, Special Characters
	var typeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var typeLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
	var typeUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","<",">","."];

	//Password Requirements (beteen 8-128)
	if (lengthPrompt < 8 || lengthPrompt > 128) {
		alert('Your password must be between 8 and 128 characters')
		return;
	}
	//Creating an array based off user's preferences
	var choiceArray = [];

	var password = [];

	if (upperConfirm === true) {
		choiceArray = choiceArray.concat(typeUpperCase);
	}
	if (lowerConfirm === true) {
		choiceArray = choiceArray.concat(typeLowerCase);
	}
	if (specialConfirm === true) {
		choiceArray = choiceArray.concat(specialChar);
	}

	if (numConfirm === true) {
		choiceArray = choiceArray.concat(typeNumbers);
	}

	//Randomizes the password by using for loop
	for (var i = 0; i < lengthPrompt; i++) {
		var random = Math.floor(Math.random() * choiceArray.length);

		password = password + choiceArray[random];
	}
	//Printing to HTML results
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
}
