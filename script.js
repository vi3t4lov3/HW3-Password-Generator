// Assignment Code
var generateBtn = document.querySelector("#generate");

//decares the variables of Characters
var specialCharacters = '!%&,*+-./<>?~';
var numbers ='0123456789';
var lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Get random characters 



// write the function to generatePassword
function generatePassword () {
  var confirmPasswordLength = 0;
  var confirmIfSpecialCharacterAllow;
  var confirmIfNumbericAllow;
  var confirmIfUpperCaseAllow;
  var confirmIfLowerCaseAllow;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
