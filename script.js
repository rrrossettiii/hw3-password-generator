// PASSWORD GENERATOR
//

// Buttons
//
// // Reset Button - reloads page & replaces text field
//
var resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reload);
function reload() {
	document.querySelector(".placeholder").value = "";
	location.reload();
	return false;
}

// Generate Button
//
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePW);

// Copy Button - copys to clipboard
//
var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copy);
function copy() {
	var copyText = document.getElementById("password");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert(
		`"${copyText.value}"` + "was succesfully copied to clipboard. \n \n \n"
	);
}

// This function runs all of the prompts and the generator itself and it writes the code to the textfield in index.html
//
function generatePW() {
	if (typeof passArray === "undefined") {
		// Prompt - length of password
		//
		var pwLength = prompt(
			"How many characters long whould you like your password to be? \n \n",
			"Pick a number between 8-128."
		);

		// Loop - forces password length between 8-128.
		//
		while (pwLength < 7 || pwLength > 129 || isNaN(pwLength)) {
			alert("Please select a number between 8-128!");
			var pwLength = prompt(
				"How many characters long whould you like your password to be? \n \n \n",
				"Pick a number between 8-128."
			);
		}
		prompts();

		// Loop - forces user to choose at least one critera
		//
		while (characters === "") {
			alert("Please accept at least 1 option to procede. \n \n \n");
			prompts();
		}

		// Character criteria prompts
		//
		function prompts() {
			// Prompt - use capital letter?
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
			characters = abc.concat(num, sym, ABC);
		}

		// Password length and character string combined.
		//
		passArray = [pwLength, characters];
		console.log(passArray);
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
		document.getElementById("reset").style.backgroundColor = "goldenrod";
		document.getElementById("copy").style.backgroundColor = "green";
		return password;
	}

	// Writes the generated password to the 'password' id in index.html
	//
	var password = generatePassword(passArray[0]);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}
