// Assignment Code
var generateBtn = document.querySelector('#generate');

// Prompts

var pwLength = prompt(
  'How many characters long whould you like your password to be?'
);

// Letters
var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(abc);

// Numbers
if (confirm('Would you like to use numbers?') === true) {
  var num = '0123456789';
}
// console.log(num);

// Special Characters
if (confirm('would you like to use special characters?') === true) {
  var sym = ' !#$%&()*+,-./:;<=>?@[]^_`{|}"~';
}
// console.log(sym);

// Write password to the #password input
function writePassword() {
  var password = generatePassword(pwLength);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

function generatePassword(length) {
  var password = '';
  var characters = abc.concat(num, sym);
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}
console.log(generatePassword(pwLength));
// console.log(password);

// If length of a string is less than x add another charachter else print.
// if (password.length < x) {
// }
// console.log(characters);

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
