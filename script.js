// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt - length of password
var pwLength = prompt(
	"How many characters long whould you like your password to be?",
	"Pick a number between 8-128."
);

// Keeps password length between 8-128.
while (pwLength < 7 || pwLength > 129) {
	alert("Please select a number between 8-128!");
	var pwLength = prompt(
		"How many characters long whould you like your password to be?",
		"Pick a number between 8-128."
	);
}

// Base character imput
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(abc);

// Prompt - use numbers?
if (confirm("Would you like to use numbers?") === true) {
	var num = "0123456789";
}
// console.log(num);

// Prompt - use symbols?
if (confirm("would you like to use special characters?") === true) {
	var sym = ' !#$%&()*+,-./:;<=>?@[]^_`{|}"~';
}
// console.log(sym);

// Write password to the #password input
function writePassword() {
	var password = generatePassword(pwLength);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Password Generator
function generatePassword(length) {
	var password = "";
	var characters = abc.concat(num, sym);
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return password;
}
// console.log(generatePassword(pwLength));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
