// Assignment code here

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "123456789";
var character = "!@#$%^&*-_."

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//password length

//password criteria

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);