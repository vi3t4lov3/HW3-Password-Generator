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
  var confirmIfLowerCaseAllow = true;
  var confirmIfUpperCaseAllow = true;
  var confirmIfNumbericAllow = true;
  var confirmIfSpecialCharacterAllow = true;

  var confirmPasswordLength = 0  // testing 0-8 will display the alert to enter how many characters you want

//this is the statement to select the lengh & characters
do {
  if (confirmPasswordLength < 8 || confirmPasswordLength >128) {
    confirmPasswordLength = window.prompt ('Enter Number (8-128) characters you want to generate');
    console.log(confirmPasswordLength); 
  }
  if (confirmPasswordLength >= 8 && confirmPasswordLength <=128) {
      do {
        confirmIfNumbericAllow = window.confirm ('Click OK if you want to include LOWERCASE characters');
        confirmIfUpperCaseAllow = window.confirm ('Click OK if you want to include UPPERCASE characters');
        confirmIfNumbericAllow = window.confirm ('Click OK if you want to include NUMERIC characters');
        confirmIfSpecialCharacterAllow = window.confirm ('Click OK if you want to include SPECIAL characters');
      } while (
        !confirmIfLowerCaseAllow && 
        !confirmIfUpperCaseAllow && 
        !confirmIfNumbericAllow && 
        !confirmIfSpecialCharacterAllow
      );
  }
} while (
  confirmPasswordLength && (confirmPasswordLength < 8 || confirmPasswordLength > 128)
);

// statement after characters had been select
if (confirmIfLowerCaseAllow) {
  console.log(confirmIfLowerCaseAllow);
}
if (confirmIfUpperCaseAllow) {
  console.log(confirmIfUpperCaseAllow);
}
if (confirmIfNumbericAllow) {
  console.log(confirmIfNumbericAllow);
}
if (confirmIfSpecialCharacterAllow) {
  console.log(confirmIfSpecialCharacterAllow);
}
// return (generatePassword);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
