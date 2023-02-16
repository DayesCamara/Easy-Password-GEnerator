// Assignment Code
//var generateBtn = document.querySelector('#generate');

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector('#password');

  //passwordText.value = password;
//}

//function generatePassword() {
  //return 'supersecretpassword';
//}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);




// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var length = window.prompt("choose password length bwtween 8 and 128");
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower and upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var numbercheck;
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    }

        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        num = "1234567890"
        char = "^^%%%))$&%^)*_+$*#&"
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));

    
    }

    function writePassword() {
      var password1 = "";
      password1 = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password1;
    }
    generateBtn.addEventListener('click', writePassword);
;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);