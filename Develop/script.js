window.alert("This is an alert! JavaScript is running!");
// Assignment code here

var pwLength = prompt ("How long would you like your password to be? (8-128 characters.)")
  if (pwLength <= 128 && pwLength >= 8) {
    console.log ("Pass.")
  } else {
    window.alert("Does not meet requirements!")
  }
function generatePassword () {
  return "Test."
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword ()
;

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.alert("Please...please....PLEASE!!!")