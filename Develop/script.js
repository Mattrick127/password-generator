window.alert("This is an alert! JavaScript is running!");
// Assignment code here




function generatePassword (pwLength) {
    var passwordChars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/';
    var randPassword = Array(pwLength)
      .fill(passwordChars)
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join('');
    return randPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Ask for password length.
  var pwLength = Number (prompt ("How long would you like your password to be? (8-128 characters)"))
if (pwLength <= 128 && pwLength >= 8) {
var lowerCase = prompt ("Would you like to include lower case characters? (a-z) YES or NO")
// In case user does not comply 
} else {
  window.alert("Does not meet requirements!")
}
console.log (pwLength)
////////////////////////////
//Ask for lower case
if (lowerCase === "YES"|| lowerCase === "yes") {
  var lowerCaseRules = true
} else {
  lowerCaseRules = false
}
console.log (lowerCaseRules)
////////////////////////////
//Ask for special case
var specialCase = prompt ("Would you like to include special characters? (@-&) YES or NO")

if (specialCase === "YES"|| specialCase === "yes") {
  var specialCaseRules = true
} else {
  specialCaseRules = false
}
console.log (specialCaseRules)
////////////////////////////
//Ask for upper case
var upperCase = prompt ("Would you like to include special characters? (A-Z) YES or NO")

if (upperCase === "YES"|| upperCase === "yes") {
  var upperCaseRules = true
} else {
  upperCaseRules = false
}
console.log (upperCaseRules)



///////////////////////////
  var password = generatePassword (pwLength)
;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.alert("Please...please....PLEASE!!!")