window.alert("This is an alert! JavaScript is running!");
// Assignment code here
var passwordChars = "";
// This is to check when user has answered no to all prompts.
var check = false
function writePassword() {
  // Ask for password length.
  var pwLength = Number (prompt ("How long would you like your password to be? (8-128 characters)"))
if (pwLength <= 128 && pwLength >= 8) {
if (passwordChars != "") {
  passwordChars = ""
}
//Ask for lower case
var lowerCase = prompt ("Would you like to include lower case characters? (a-z) YES or NO")
// In case user does not comply 
} else {
  return window.alert("Does not meet requirements!")
}
console.log (pwLength)
if (lowerCase === "YES"|| lowerCase === "yes") {
  check = true
  passwordChars += "abcdefghijklmnopqrstuvwxyz"
}
console.log (passwordChars)
//Ask for special case
var specialCase = prompt ("Would you like to include special characters? (@-&) YES or NO")
if (specialCase === "YES"|| specialCase === "yes") {
  check = true
  passwordChars += " !#$%&'()*+,-./:;<=>?@]^_[`{|}~ "
} console.log (passwordChars)
//Ask for upper case
var upperCase = prompt ("Would you like to include upper case characters? (A-Z) YES or NO")

if (upperCase === "YES"|| upperCase === "yes") {
  check = true
  passwordChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
} console.log (passwordChars)
//Ask for numbers
var numbers = prompt ("Would you like to include numbers? (0-9) YES or NO")
if (numbers === "YES"|| numbers === "yes") {
  check = true
  passwordChars += "0123456789"
  console.log (passwordChars)
} if (!check) {
  window.alert ("One category must be selected. Please start again.")
  passwordChars = ""
}

  var password = generatePassword (pwLength)
;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// This is the function to receive the password at it's length, and selected characters.
function generatePassword (pwLength) {
    var Password = Array(pwLength)
      .fill(passwordChars)
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join('');
    return Password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);