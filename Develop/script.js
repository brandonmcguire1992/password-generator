


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&()+<=>?@";

var generatePassword = function() {
  var characters = "";
  var endpassword = "";
  var passwordLength = window.prompt("How long of a password would you prefer? (between 8 to 128 character)");
  console.log(passwordLength + " characters chosen.");

  if(passwordLength < 8 || passwordLength > 128) {
    window.alert("The number of characters chosen is either too short or too long! Please choose a number between 8 to 128 character only!");
  } 
  else {
    var confirmUpper = window.confirm("Would you like to use uppercase characters? Click 'OK' for 'yes' and 'CANCEL' for 'no'.");
    if(confirmUpper && confirmUpper !== undefined) {
      characters += upper
    }

    var confirmLower = window.confirm("Would you like to use lowercase characters? Click 'OK' for 'yes' and 'CANCEL' for 'no'.");
    if(confirmLower && confirmLower !== undefined) {
      characters += lower
    }

    var confirmNumbers = window.confirm("Would you like to use number characters? Click 'OK' for 'yes' and 'CANCEL' for 'no'.");
    if(confirmNumbers && confirmNumbers !== undefined) {
      characters += numbers
    }

    var confirmSpecial = window.confirm("Would you like to use special characters? Click 'OK' for 'yes' and 'CANCEL' for 'no'.");
    if(confirmSpecial && confirmSpecial !== undefined) {
      characters += special
    }

    for(var i = 0; i <= passwordLength; i++) {
      var randomPass = Math.floor(Math.random() * characters.length);
      endpassword += characters[randomPass];
    }
  }

  return endpassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  console.log(password);

  

  passwordText.value = password;
  
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
