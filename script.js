// Assignment Code
var generateBtn = document.querySelector("#generate");

//decares the global variables of Characters 
var specialCharacters = '!%&,*+-./<>?~';
var numbers ='0123456789';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


// 
function randomIndex(length) {
  return Math.floor(Math.random() * length);
  }
// Pick a character  from random index from charAt 
function pickRandomElementFromString(string) {
  return string.charAt(randomIndex(string.length));
}

// this function to generate the character with  the length we want 
function collectAllElementsIntoCharacters(elements, passwordCharacters) {
  for (var i = 0; i < elements.length; i++) {
    passwordCharacters.push(elements[i]);
  }
  return passwordCharacters;
}

function generateRandomPasswordWithLength(confirmedLength, passwordCharacters) {
  var randomPassword ='';
  for (var i = 0; i < confirmedLength; i++) {
    randomPassword += passwordCharacters[randomIndex(passwordCharacters.length)];
  }
  return randomPassword;
}

function shuffledPassword(password) {
  var shuffledPassword ='';
  var passwordArray = password.split('');

  while (passwordArray.length > 0) {
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    shuffledPassword += passwordArray[randomIndex];
    passwordArray.splice(randomIndex, 1);
  }
  return shuffledPassword;
}

// write the function to generatePassword
function generatePassword () {
  var confirmPasswordLength = 0;
  var confirmIfLowerCaseAllow;
  var confirmIfUpperCaseAllow;
  var confirmIfNumbericAllow;
  var confirmIfSpecialCharacterAllow;
  var passwordCharacters = [];
//this is the statement to select the lengh & characters
do {
  if (confirmPasswordLength < 8 || confirmPasswordLength >128) {
    confirmPasswordLength = window.prompt ('Please Enter Number (8-128) password you want to generate!');
    // console.log(confirmPasswordLength); 
  }
  if (confirmPasswordLength >= 8 && confirmPasswordLength <=128) {
      do {
        confirmIfLowerCaseAllow = window.confirm ('Click OK or press ENTER to include LOWERCASE characters. Click Cancel to not include.');
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
  passwordCharacters = collectAllElementsIntoCharacters(
    lowerLetters,
    passwordCharacters
  );
  // console.log(lowerLetters,passwordCharacters);
}
if (confirmIfUpperCaseAllow) {
  passwordCharacters = collectAllElementsIntoCharacters(
    upperLetters,
    passwordCharacters
  );
}
if (confirmIfNumbericAllow) {
  passwordCharacters = collectAllElementsIntoCharacters(
    numbers,
    passwordCharacters
  );
}
if (confirmIfSpecialCharacterAllow) {
  passwordCharacters = collectAllElementsIntoCharacters(
    specialCharacters,
    passwordCharacters
  );
}
return (generateRandomPasswordWithLength (
  confirmPasswordLength,
  passwordCharacters
) || '');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
