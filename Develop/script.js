// Assignment Code

// Variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseCheck;
var numberChar = "123456789";
var numberCheck;
var special = "!@#$%^&*_-~.?"
var specialCheck;
var length;
var generateBtn = document.querySelector("#generate");


window.alert("Please click generate and then answer the following questions to receive your randomely generated password.")

// Uppercase check
function passUpper(){
  uppercaseCheck = prompt("Uppercase letters?");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      passUpper();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      passUpper();
    }

    return uppercaseCheck;
}

//Number check
function passNums(){
  numberCheck = prompt("Lowercase letters?");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      passNums();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      passNums();

    }
    return numberCheck;
}

//Special characters check
function passSpecial(){
  specialCheck = prompt("Special characters?");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      passSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      passSpecial();

    }
    return specialCheck;
}

//Password length
function passLength(){
  length = prompt("Password length?");

    if (length<8){
      alert("Password length must be a number between 8-128 characters");
      passLength();
    }else if (length>128){
      alert("Password length must be a number between 8-128 characters");
      passLength();
    }else if (isNaN(length)){
      alert("Password length must be a number between 8-128 characters");
      passLength();

    }else
    return length;
}

 //Generate password 
function generatePassword(){
  passLength();
  console.log(length);
  passUpper();
  console.log(uppercaseCheck);
  passNums();
  console.log(numberCheck);
  passSpecial();
  console.log(specialCheck);

var characters = lowercase;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercase + numberChar + special;

}else if (uppercaseCheck && numberCheck){
  characters += uppercase + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + special;

}else if (uppercaseCheck && specialCheck){
  characters += uppercase + special;

}else if (uppercaseCheck){
  characters += uppercase;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += special;

}else{
  characters === lowercase;
}

  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);