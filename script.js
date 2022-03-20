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
var confirmPasswordLength = 520 // testing 0-8 will display the alert to enter how many characters you want
do {
  if (confirmPasswordLength < 8 || confirmPasswordLength >128) {
    confirmPasswordLength = window.prompt ('Enter Number (8-128) characters you want to generate');
    // console.log(confirmPasswordLength); 
  }
  if (confirmPasswordLength >= 8 && confirmPasswordLength <=128) {
      do {
        confirmIfSpecialCharacterAllow = window.confirm ('Click OK if you want to include special characters');
        confirmIfNumbericAllow = window.confirm ('Click OK if you want to include numeric characters');
        confirmIfUpperCaseAllow = window.confirm ('Click OK if you want to include uppercase characters');
        confirmIfNumbericAllow = window.confirm ('Click OK if you want to include lowercase characters');
      } while (
        confirmIfSpecialCharacterAllow && !confirmIfNumbericAllow && !confirmIfUpperCaseAllow && !confirmIfLowerCaseAllow
      );
  }
} while (
  confirmPasswordLength && (confirmPasswordLength < 8 || confirmPasswordLength > 128)
);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
