// PASSWORD GENERATOR
//

// Generate Button
//
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePW);

// This function runs all of the prompts and the generator itself and it writes the code to the textfield in index.html
//
function generatePW() {
	if (typeof passArray === "undefined") {
		// Prompt - length of password
		//
		var pwLength = prompt(
			"How many characters long whould you like your password to be?",
			"Pick a number between 8-128."
		);

		// Prompt - loop that keeps password length between 8-128.
		//
		while (pwLength < 7 || pwLength > 129) {
			alert("Please select a number between 8-128!");
			var pwLength = prompt(
				"How many characters long whould you like your password to be?",
				"Pick a number between 8-128."
			);
		}

		// Prompt - use numbers?
		//
		if (confirm("Would you like to use numbers?") === true) {
			var num = "0123456789";
		}

		// Prompt - use symbols?
		//
		if (confirm("would you like to use special characters?") === true) {
			var sym = ' !#$%&()*+,-./:;<=>?@[]^_`{|}"~';
		}

		// Base character string.
		//
		var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

		// All selected character strings put together
		//
		characters = abc.concat(num, sym);

		// Password length and character string combined.
		//
		passArray = [pwLength, characters];
	}

	// The Password Generator
	//
	function generatePassword(length) {
		var password = "";
		var charactersLength = passArray[1].length;
		for (var i = 0; i < length; i++) {
			password += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}
		document.getElementById("reset").style.backgroundColor = "orange";
		return password;
	}

	// Writes the generated password to the 'password' id in index.html
	//
	var password = generatePassword(passArray[0]);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Reset Button - reloads page & replaces text field
//
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reload);
function reload() {
	document.querySelector(".placeholder").value = "";
	location.reload();
	return false;
}
