// PASSWORD GENERATOR
//

// Generate Button
//
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePW);

// // Reset Button - reloads page & replaces text field.
//
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reload);
function reload() {
	document.querySelector(".placeholder").value = "";
	location.reload();
	return false;
}

// Copy Button - copies to clipboard.
//
var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copy);
function copy() {
	var copyText = document.getElementById("password");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert(
		`"${copyText.value}"` +
			"  was successfully copied to your clipboard. \n \n \n"
	);
	if (thankYou === 1) {
		alert("Thank you for using Secure Password Generator. \n \n \n");
		thankYou = 0;
	}
}

// This function runs all of the prompts and the generator itself and it writes the code to the text field in index.html
//
function generatePW() {
	prompts();
	writePassword();
}
// The Password Generator
//
function passwordGenerator(length) {
	var password = "";
	for (var i = 0; i < length; i++) {
		password += combinedCharacters.charAt(
			Math.floor(Math.random() * passwordArray[1].length)
		);
	}
	document.getElementById("reset").style.backgroundColor = "goldenrod";
	document.getElementById("copy").style.backgroundColor = "green";
	return password;
}

// Writes the generated password to the 'password' id in index.html
//
function writePassword() {
	var password = passwordGenerator(passwordArray[0]);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Password criteria Prompts
//
function prompts() {
	// Prompt - length of password
	//
	if (typeof pwLength === "undefined") {
		pwLength = prompt(
			"How many combinedCharacters long would you like your password to be? \n \n",
			"Pick a number between 8-128."
		);

		// Loop - forces password length between 8-128.
		//
		while (pwLength < 7 || pwLength > 129 || isNaN(pwLength)) {
			alert("Please select a number between 8-128!");
			pwLength = prompt(
				"How many combinedCharacters long would you like your password to be? \n \n \n",
				"Pick a number between 8-128."
			);
		}

		// Continue prompts
		//
		combinedCharacters = "";
	}

	// Prompts - character criteria
	//
	if (combinedCharacters === "") {
		// Prompt - use lower case letters?
		//
		if (
			confirm("Would you like to use lower case letters? \n \n \n") === true
		) {
			var abc = "abcdefghijklmnopqrstuvwxyz";
		} else {
			var abc = "";
		}

		// Prompt - use capital letters?
		//
		if (confirm("Would you like to use capital letters? \n \n \n") === true) {
			var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else {
			var ABC = "";
		}

		// Prompt - use numbers?
		//
		if (confirm("Would you like to use numbers? \n \n \n") === true) {
			var num = "0123456789";
		} else {
			var num = "";
		}

		// Prompt - use symbols?
		//
		if (
			confirm("Would you like to use special characters? \n \n \n") === true
		) {
			var sym = ' !#$%&()*+,-./:;<=>?@[]^_`{|}"~';
		} else {
			var sym = "";
		}

		// All selected character strings put together
		//
		combinedCharacters = abc.concat(num, sym, ABC);

		// Loop - forces user to choose at least one criteria
		//
		while (combinedCharacters === "") {
			alert("Please accept at least 1 option to proceed. \n \n");
			prompts();
		}
	}

	// Password length and character string combined.
	//
	passwordArray = [pwLength, combinedCharacters];
	// console.log(passwordArray);
}

// Thank you message - only runs once
//
thankYou = 1;
