const length = prompt('How many characters would you like?')
if (length < 8 || length > 128) {
  alert ('Password too short/long')
}
if (length > 8 || length < 128) {
  let upperCase = confirm ('Would you like capital letters?')
  let lowerCase = confirm ('Would you like lower case letter?')
  let numbers = confirm ('Would you like numbers?')
  let special = confirm ('Would you like special characters')
}
if (upperCase != true && lowerCase != true && numbers != true && special != true) {
  alert("You must select at least one character type!")
  }

function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function numbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function special() {
  const special = '!@#$%^&*(){}[]=<>/,.';
  return special [Math.floor(Math.random() * special.length)];
}
let generateBtn = document.querySelector("#generate");

function generatePassword () {
  lowerCase(), upperCase(), numbers(), special() ``
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lowerCase+upperCase+numbers+special);
  var passwordText = document.querySelector("#password");
  writePassword()
  passwordText.value = password;
  for (let i = 0; i < generatePassword.length; i++)
}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);