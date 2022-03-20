// Assignment Code
var generateBtn = document.querySelector("#generate");

//decares the variables of Characters
var specialCharacters = '!%&,*+-./<>?~';
var numbers ='0123456789';
var lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Get random index from characters
function generateString(lengh) {
  var result = '';
  var charactersLength = specialCharacters.length;
  for (var i = 0; i < lengh; i++) {
    result += specialCharacters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result;

}
console.log(generateString(10));


// write the function to generatePassword
function generatePassword () {
  var confirmPasswordLength = 0;
  var confirmIfLowerCaseAllow = true;
  var confirmIfUpperCaseAllow = true;
  var confirmIfNumbericAllow = true;
  var confirmIfSpecialCharacterAllow = true;
//this is the statement to select the lengh & characters
do {
  if (confirmPasswordLength < 8 || confirmPasswordLength >128) {
    confirmPasswordLength = window.prompt ('Please Enter Number (8-128) password you want to generate!');
    console.log(confirmPasswordLength); 
  }
  if (confirmPasswordLength >= 8 && confirmPasswordLength <=128) {
      do {
        confirmIfNumbericAllow = window.confirm ('Click OK or press ENTER to include LOWERCASE characters. Click Cancel to not include.');
        confirmIfUpperCaseAllow = window.confirm ('Click OK or press ENTER to include UPPERCASE characters. Click Cancel to not include.');
        confirmIfNumbericAllow = window.confirm ('Click OK or press ENTER to include NUMBER. Click Cancel to not include.');
        confirmIfSpecialCharacterAllow = window.confirm ('Click OK or press ENTER to include SPECIAL characters. Click Cancel to not include.');
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

// statement after characters had been selected
if (confirmIfLowerCaseAllow) {
  // passwordCharacters = finalPasswordGenerator;
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
return (generatePassword);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
