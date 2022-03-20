// Assignment Code
var generateBtn = document.querySelector("#generate");

//decares the variables of Characters
var specialCharacters = '!%&,*+-./<>?~';
var numbers ='0123456789';
var lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
